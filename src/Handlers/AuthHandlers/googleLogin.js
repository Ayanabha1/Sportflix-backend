const connectToDatabase = require("../../Database/db");
const { loginValidation } = require("../../Validation/SchemaValidation");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const userModel = require("../../Model/UserModel");
const bcrypt = require("bcryptjs");
const { sendError, sendResponse } = require("../../Utils/response");

async function generateToken(data) {
  const token = await jwt.sign(
    {
      data,
    },
    process.env.JWT_SECRET
  );
  return token;
}

const generateGoogleAccntPassword = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const signupFunc = async (data) => {
  try {
    const trimmedName = data?.name.trim();
    const trimmedEmail = data?.email.trim();

    const pass = generateGoogleAccntPassword(10);

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);

    const user_obj = {
      name: trimmedName,
      email: trimmedEmail,
      password: hashedPass,
      picture: data?.picture,
      is_google_accnt: true,
    };

    const user = new userModel(user_obj);
    const newUser = await user.save();

    // Generate the jwt Token
    const _token = await generateToken(newUser);
    return sendResponse({
      user: newUser,
      message: "Signup success!",
      token: _token,
    });
  } catch (error) {
    return sendError(error?.statusCode, error);
  }
};

const loginFunc = async (user) => {
  try {
    const _token = await generateToken(user);
    return sendResponse({
      user: user,
      message: "Login success!",
      token: _token,
    });
  } catch (error) {
    return sendError(error?.statusCode, error);
  }
};

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const db = await connectToDatabase();
    const reqObj = JSON.parse(event.body);
    console.log(reqObj);
    if (!reqObj?.credential) {
      return sendError(400, { message: "Not a google account" });
    }

    const data = jwt_decode(reqObj?.credential);
    const email = data.email;

    // check if the user already exists in the db
    const user = await userModel.findOne({
      email: email,
    });

    if (!user) {
      return signupFunc(data);
    }
    return loginFunc(user);
  } catch (error) {
    return sendError(error?.statusCode, error);
  }
};
