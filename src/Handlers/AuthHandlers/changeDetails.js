const connectToDatabase = require("../../Database/db");
const UserModel = require("../../Model/UserModel");
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

    const reqObj = JSON.parse(event?.body);

    await UserModel.updateOne(
      { _id: userId },
      { $set: { name: reqObj?.name, dob: reqObj?.dob } }
    );
    return sendResponse({ message: "Successfully changed user details" });
  } catch (err) {
    return sendError(400, err);
  }
};
