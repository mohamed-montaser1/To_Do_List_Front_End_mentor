const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 3002;
const mainRoute = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/api", mainRoute);
app.listen(port, () => {
  console.log(`Listen At Localhost:${port}`);
});
mongoose.connect("mongodb://localhost:27017/todolist-frontendmentor", () => {
  console.log("connected");
});
