const connectToDatabase = require("../../Database/db");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Model/UserModel");
const EventModel = require("../../Model/EventModel");
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
    const { lat, lng } = event.queryStringParameters;
    const allEvents = await EventModel.find();
    const nearestEvents = await EventModel.find({
      loc: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [lat, lng],
          },
          $maxDistance: 50000, //Radius - 5KM
          $minDistance: 0,
        },
      },
    });

    const payload = {
      allEvents: allEvents,
      nearestEvents: nearestEvents,
      message: "success",
    };

    return sendResponse(payload);
  } catch (err) {
    return sendError(400, { message: "No event found" });
  }
};
