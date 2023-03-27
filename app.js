const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
require("dotenv/config");

const mongoose = require("mongoose");

const authRoute = require("./Routes/authRoute");
const eventRoute = require("./Routes/eventRoute");

app.use(cors());
app.use(express.json());

// DB connection

const connectDB = () => {
  const uri =
    "mongodb+srv://r3x:ashabaririmbo@cluster0.g2c9e5a.mongodb.net/SportFlix?retryWrites=true&w=majority";
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connectDB();

// mongoose.connect(
//   process.env.DB_CONNECTION,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("Yay! Database is connected");
//   }
// );

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
