// const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 80;
const axios = require("axios");
require("dotenv/config");

// Socket setup

global.io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    allowEIO3: true,
  },
});

const mongoose = require("mongoose");

const authRoute = require("./Routes/authRoute");
const eventRoute = require("./Routes/eventRoute");

app.use(cors());
app.use(express.json());

// DB connection

const connectDB = () => {
  const uri = process.env.DB_CONNECTION;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("CONNECTED");
};

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/events", eventRoute);

// serving the client static files
// app.use(express.static("client/build"));
 app.get("/", (req, res) => {
   res.send("Sportflix backend: you better have the access or I'll hunt you down");
 });


// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

connectDB();
