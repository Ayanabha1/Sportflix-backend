const connectToDatabase = require("../../Database/db");
const ChatModel = require("../../Model/ChatModel");
const validateUser = require("../../Validation/validateUser");

const bcrypt = require("bcryptjs");
const { sendError, sendResponse } = require("../../Utils/response");

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

    const rooms = await ChatModel.find({
      participants: { $in: [userId] },
    });
    return sendResponse({ rooms: rooms, message: "success" });
  } catch (err) {
    return sendError(400, { message: "No registered event found" });
  }
};
