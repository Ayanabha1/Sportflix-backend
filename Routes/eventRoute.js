const router = require("express").Router();
const bcrypt = require("bcrypt");
const EventModel = require("../Model/EventModel");
const UserModel = require("../Model/UserModel");
const validateUser = require("./validateUser");

// Route for adding event
router.post("/add-event", validateUser, async (req, res) => {
  let incomingData = req.body;
  const eventDate = new Date(incomingData?.date);
  const currDate = new Date();
  if (currDate > eventDate) {
    res.status(400).send({ message: "Cannot add event in the past" });
    return;
  }
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

// Route for getting nearest events using coordinates
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
          $maxDistance: 50000, //5KM
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
    res.status(400).send({ message: err });
  }
});

// route to join event

router.post("/join-event", validateUser, async (req, res) => {
  try {
    const eventId = req.body?.eventId;
    const userId = req.body?.userId;
    const targetEvent = await EventModel.findOne({ _id: eventId });
    const date_of_reg = new Date();
    const eventDate = new Date(targetEvent?.date);
    const user = await UserModel.findOne({ _id: userId });
    if (targetEvent?.min_age && user.age < targetEvent?.min_age) {
      res.status(400).send({
        message: `You need to be under ${targetEvent?.min_age} years to register to this event`,
      });
      return;
    }
    if (date_of_reg < eventDate) {
      if (targetEvent?.participants?.length < targetEvent?.max_players) {
        // check if user is already registered
        const userExists = await EventModel.count({
          _id: eventId,
          participants: { $in: [userId] },
        });
        if (userExists === 0) {
          await EventModel.updateOne(
            { _id: eventId },
            { $push: { participants: userId } }
          );
          await UserModel.updateOne(
            { _id: userId },
            {
              $push: { events: eventId },
            }
          );
          res.send({ message: "Registered to event successfully" });
        } else {
          res.status(400).send({ message: "You are already registered" });
        }
      } else {
        res
          .status(400)
          .send({ message: "Cannot register ... no slot remaining" });
      }
    } else {
      res
        .status(400)
        .send({ message: "Cannot register ... registration over" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong ... please try again" });
  }
});

module.exports = router;
