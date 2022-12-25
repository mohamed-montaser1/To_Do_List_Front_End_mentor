const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 3002;
const mainRoute = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/api", mainRoute);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Listen At Localhost:${port}`);
});

mongoose.connect(
  "mongodb+srv://mohamed-montaser:mo7a_montaser@to-do-list.qvtaays.mongodb.net/todolist-mern-stack",
  () => {
    console.log("connected");
  }
);
