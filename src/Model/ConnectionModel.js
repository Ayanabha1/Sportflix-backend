const string = require("@hapi/joi/lib/types/string");
const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  room_id: {
    type: String,
    required: "room id is required",
  },
  connection_id: {
    type: String,
    required: "host id is required",
  },
});
module.exports = mongoose.model("connections", connectionSchema);
