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
    required: "District is reqired",
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
    required: "PinCode name is reqired",
  },
  sector: {
    type: String,
    required: "Sector name is reqired",
  },
  state: {
    type: String,
    required: "State name is reqired",
  },
  latitude: {
    type: Number,
    required: "Latitude is required",
  },
  longitude: {
    type: Number,
    required: "Longitude is required",
  },
});

module.exports = mongoose.model("events", eventSchema);
