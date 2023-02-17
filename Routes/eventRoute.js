const router = require("express").Router();
const bcrypt = require("bcrypt");
const EventModel = require("../Model/EventModel");

router.post("/addEvent", async (req, res) => {
  const eventData = new EventModel(req.body);
  try {
    const newEvent = await eventData.save();
    res.send({ event: newEvent, message: "New event added" });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
