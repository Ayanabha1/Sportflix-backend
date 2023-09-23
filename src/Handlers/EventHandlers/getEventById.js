const connectToDatabase = require("../../Database/db");
const EventModel = require("../../Model/EventModel");

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
    const { eventId } = event.queryStringParameters;
    const targetEvent = await EventModel.findOne({ _id: eventId });
    return sendResponse({ event: targetEvent, message: "success" });
  } catch (err) {
    return sendError(400, { message: "Event not found" });
  }
};
