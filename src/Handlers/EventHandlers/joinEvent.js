const connectToDatabase = require("../../Database/db");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Model/UserModel");
const EventModel = require("../../Model/EventModel");
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

    let incomingData = JSON.parse(event.body);
    const eventId = incomingData?.eventId;
    const targetEvent = await EventModel.findOne({ _id: eventId });
    const date_of_reg = new Date();
    const eventDate = new Date(targetEvent?.date);
    const user = await UserModel.findOne({ _id: userId });
    if (targetEvent?.min_age && user.age < targetEvent?.min_age) {
      return sendError(400, {
        message: `You need to be older than ${targetEvent?.min_age} years to register to this event`,
      });
    }
    if (date_of_reg < eventDate) {
      if (targetEvent?.participants?.length < targetEvent?.max_players) {
        // check if user is already registered
        const userExists = await EventModel.count({
          _id: eventId,
          participants: { $in: [userId] },
        });
        if (userExists === 0) {
          await EventModel.updateOne(
            { _id: eventId },
            { $push: { participants: userId } }
          );
          await UserModel.updateOne(
            { _id: userId },
            {
              $push: { events: eventId },
            }
          );
          await ChatModel.updateOne(
            { room_id: eventId },
            {
              $push: { participants: userId },
            }
          );

          return sendResponse({ message: "Registered to event successfully" });
        } else {
          return sendError(400, { message: "You are already registered" });
        }
      } else {
        return sendError(400, {
          message: "Cannot register ... no slot remaining",
        });
      }
    } else {
      return sendError(400, {
        message: "Cannot register ... registration over",
      });
    }
  } catch (err) {
    return sendError(400, err);
  }
};
