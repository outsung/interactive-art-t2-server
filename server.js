require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const domains = [
  "http://localhost:19000",
  "http://localhost:3000",
  "https://outsung.github.io",
  // "https://amritb.github.io",
];

// cors
const corsOptions = {
  origin: function (origin, callback) {
    const isTrue = domains.indexOf(origin) !== -1;
    callback(null, isTrue);
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// server start
const server = app.listen(port, () => {
  console.log("Server is running on port : " + port);
});

// socket start
const io = socketIo(server);
require("./src/socket/socket")(io);
