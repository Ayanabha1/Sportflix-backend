const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
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

// Routes and middlewares

app.get("/", (req, res) => {
  res.send("Heyy whatsup This is Ayanabha Misra");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/events", eventRoute);

// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

connectDB();
