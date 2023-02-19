const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  host: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: "Date is required",
  },
  max_players: {
    type: Number,
  },
  min_age: {
    type: Number,
  },
  city: {
    type: String,
    required: "City is reqired",
  },
  country: {
    type: String,
    required: "Country is reqired",
  },
  district: {
    type: String,
  },
  locatlity: {
    type: String,
    required: "Locatlity is reqired",
  },
  location: {
    type: String,
    required: "Location name is reqired",
  },
  pinCode: {
    type: String,
  },
  sector: {
    type: String,
  },
  state: {
    type: String,
  },
  latitude: {
    type: Number,
    required: "Latitude is required",
  },
  longitude: {
    type: Number,
    required: "Longitude is required",
  },
  type: {
    type: String,
    required: "Game type is required",
  },
  participants: {
    type: [String],
  },
});

module.exports = mongoose.model("events", eventSchema);
