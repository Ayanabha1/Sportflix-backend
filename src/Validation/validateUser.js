const jwt_decode = require("jwt-decode");

const validateUser = (token) => {
  if (token === undefined || token === null) {
    return NULL;
  }
  try {
    const userDetails = jwt_decode(token);
    const userId = userDetails.data._id;
    return userId;
  } catch (err) {
    return NULL;
  }
};
module.exports = validateUser;
