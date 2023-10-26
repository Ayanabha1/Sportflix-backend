const jwt_decode = require("jwt-decode");
const { sendError, sendResponse } = require("../../Utils/response");
const validateUser = require("../../Validation/validateUser");
const UserModel = require("../../Model/UserModel");
const connectToDatabase = require("../../Database/db");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const db = await connectToDatabase();
  } catch (err) {
    return sendError(err.statusCode, err);
  }

  try {
    const token = event.headers.authorization.split("Bearer ")[1];
    if (!token) {
      return sendError(400, { message: "User not signedin" });
    }
    const userId = validateUser(token);
    if (!userId) {
      return sendError(400, { message: "User not signedin" });
    }
    const user = await UserModel.findOne({ _id: userId });
    if (user) {
      return sendResponse({ user: user, message: "success" });
    } else {
      return sendError(404, { message: "User not found" });
    }
  } catch (error) {
    return sendError(error?.statusCode, error);
  }
};
