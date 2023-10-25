const connectToDatabase = require("../../Database/db");
const ChatModel = require("../../Model/ChatModel");
const validateUser = require("../../Validation/validateUser");
const connModel = require("../../Model/ConnectionModel");
const AWS = require("aws-sdk");

const { sendError, sendResponse } = require("../../Utils/response");
const endpoint = process.env.AWS_API_ENDPOINT;
const gatewayClient = new AWS.ApiGatewayManagementApi({
  apiVersion: "2018-11-29",
  endpoint,
});

const sendToOne = async (connectionId, payload) => {
  // console.log(connectionId);
  // console.log(payload);
  return gatewayClient
    .postToConnection({
      ConnectionId: connectionId,
      Data: JSON.stringify(payload),
    })
    .promise();
};

const sendToAll = async (senderId, roomId, message) => {
  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(400, err);
  }
  const allConnections = await connModel.find({ room_id: roomId });
  const sendPromises = allConnections.map(async ({ connection_id }) => {
    if (senderId !== connection_id) {
      try {
        await sendToOne(connection_id, message);
      } catch (error) {
        console.log(`Error sending message to ${connection_id}:`, error);
        if (error.statusCode === 410) {
          console.log("WARNING : Unclosed connections found");
          await connModel.deleteMany({ connection_id: connection_id });
          console.log("Garbage connection deleted");
        }
      }
    }
  });
  return Promise.all(sendPromises);
};

const sendMessageHandler = async (connectionId, { roomId, data }) => {
  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(400, err);
  }
  const payload = { action: "receive-message", data: data };
  const newChat = {
    sender_name: data.sender_name,
    sender_id: data.sender_id,
    date: data.date,
    time: data.time,
    message: data.message,
  };
  try {
    await ChatModel.updateOne(
      { room_id: roomId },
      { $push: { messages: newChat } }
    );
  } catch (err) {
    console.log(err);
  }
  return await sendToAll(connectionId, roomId, payload);
};

const joinRoomHandler = async (connectionId, roomId) => {
  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(400, err);
  }
  try {
    const roomInfo = await ChatModel.findOne({ room_id: roomId });
    if (!roomInfo) {
      await sendToOne(connectionId, { message: "Room does not exist" });
      return;
    }
    const newConnection = new connModel({
      connection_id: connectionId,
      room_id: roomId,
    });
    const savedConnection = await newConnection.save();
    console.log("New connection saved");

    await sendToOne(connectionId, { action: "init-room", roomInfo: roomInfo });
  } catch (error) {}
};

const leaveRoomHandler = async (connectionId) => {
  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(400, err);
  }
  try {
    await connModel.deleteMany({ connection_id: connectionId });
    console.log("New connection deleted");
  } catch (error) {}
};

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { connectionId, eventType } = event.requestContext;

  if (eventType === "CONNECT") {
    console.log(`New connection : ${connectionId}`);
  } else if (eventType === "DISCONNECT") {
    await leaveRoomHandler(connectionId);
  } else {
    const payload = JSON.parse(event.body);
    switch (payload.action) {
      case "join-room":
        // console.log("Trying to join");
        await joinRoomHandler(connectionId, payload.roomId);
        break;
      case "send-message":
        await sendMessageHandler(connectionId, payload);
        break;

      default:
        break;
    }
  }

  return sendResponse({ message: "Hello from lambda function" });
};
