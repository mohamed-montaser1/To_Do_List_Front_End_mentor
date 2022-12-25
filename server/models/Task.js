const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  complated: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
