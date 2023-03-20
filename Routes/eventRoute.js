const router = require("express").Router();
const bcrypt = require("bcrypt");
const EventModel = require("../Model/EventModel");

// Route to add an event
router.post("/add-event", async (req, res) => {
  let incomingData = req.body;
  incomingData.loc = {
    type: "Point",
    coordinates: [incomingData.latitude, incomingData.longitude],
  };
  const eventData = new EventModel(req.body);
  try {
    const newEvent = await eventData.save();
    res.send({ event: newEvent, message: "New event added" });
  } catch (err) {
    res.send(err);
  }
});

// Route to get nearest events to a coordinate within a radius

router.get("/get-nearest-events", async (req, res) => {
  try {
    const lat = req.query.lat;
    const lng = req.query.lng;
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
    res.send({
      allEvents: allEvents,
      nearestEvents: nearestEvents,
      message: "success",
    });
  } catch (err) {
    res.status(400).send({ message: err?.details[0]?.message });
  }
});

// Route to join event

router.post("/join-event", async (req, res) => {
  try {
    const eventId = req.body.eventId;
    // const date_of_reg = new Date();
    const targetEvent = await EventModel.find();
    // console.log(targetEvent);
    res.send(targetEvent);
  } catch (err) {
    res.status(400).send({ message: err?.details[0]?.message });
  }
});

module.exports = router;
