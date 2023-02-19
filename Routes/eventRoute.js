const router = require("express").Router();
const bcrypt = require("bcrypt");
const EventModel = require("../Model/EventModel");

router.post("/add-event", async (req, res) => {
  const eventData = new EventModel(req.body);
  try {
    const newEvent = await eventData.save();
    res.send({ event: newEvent, message: "New event added" });
  } catch (err) {
    res.send(err);
  }
});

router.get("/get-events-from-city", async (req, res) => {
  try {
    const city = req.query.city;
    const events = await EventModel.find({ city: city });
    console.log("first");
    res.send({ events: events, message: "success" });
  } catch (err) {
    res.status(400).send({ message: err.details[0].message });
  }
});

module.exports = router;
