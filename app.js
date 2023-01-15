const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
require("dotenv/config");


const mongoose = require("mongoose");

const authRoute = require("./Routes/authRoute");

app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Yay! Database is connected");
});

// Routes and middlewares

app.get("/", (req, res) => {
  res.send("Heyy whatsup This is Ayanabha Misra");
});

app.use("/api/v1/auth", authRoute);

// Listening to the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

