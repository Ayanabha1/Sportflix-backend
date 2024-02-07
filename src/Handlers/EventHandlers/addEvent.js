const connectToDatabase = require("../../Database/db");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Model/UserModel");
const EventModel = require("../../Model/EventModel");
const ChatModel = require("../../Model/ChatModel");
const validateUser = require("../../Validation/validateUser");
const parser = require("lambda-multipart-parser");

const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const bcrypt = require("bcryptjs");
const { sendError, sendResponse } = require("../../Utils/response");

const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.IMAGE_S3_BUCKET,
    Key: "event_images/" + Date.now() + file?.filename,
    Body: file.content,
    ContentType: file.contentType,
  };

  // Upload the image to S3
  return s3.upload(params).promise();
};

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(400, err);
  }

  try {
    const token = event?.headers?.authorization?.split("Bearer ")[1];
    if (!token) {
      return sendError(400, { message: "User not signedin" });
    }
    const userId = validateUser(token);
    if (!userId) {
      return sendError(400, { message: "User not signedin" });
    }
    const result = await parser.parse(event);
    const files = result?.files;
    const incomingData = (({ files, ...rest }) => rest)(result);
    const eventDate = new Date(incomingData?.date);
    const currDate = new Date();
    if (currDate > eventDate) {
      return sendError(400, { message: "Cannot add event in the past" });
    }
    incomingData.host_id = userId;
    incomingData.loc = {
      type: "Point",
      coordinates: [incomingData.latitude, incomingData.longitude],
    };
    incomingData.participants = [userId];
    let fileURLS = [];

    // Try to upload to s3

    if (files.length > 0) {
      const uploadPromises = files.map((file) => uploadToS3(file));
      try {
        const uploadResults = await Promise.all(uploadPromises);
        uploadResults?.forEach((res) => {
          fileURLS.push(res?.Location);
        });
      } catch (error) {
        console.log("Could not upload a file");
      }
    }

    if (fileURLS.length > 0) {
      incomingData.pictures = fileURLS;
    }
    const eventData = new EventModel(incomingData);
    const newEvent = await eventData.save();
    await UserModel.updateOne(
      { _id: userId },
      { $push: { events: newEvent?._id, events_hosted: newEvent?._id } }
    );
    const newChatRoom = await ChatModel({
      room_id: newEvent?._id,
      name: newEvent?.location,
      date: newEvent?.date,
      type: newEvent?.type,
      host_id: newEvent?.host_id,
      participants: [userId],
      messages: [],
    });
    await newChatRoom.save();

    return sendResponse({
      event: newEvent,
      message: "New event added",
    });
  } catch (err) {
    return sendError(err?.statusCode, err);
  }
};
