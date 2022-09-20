const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  jobName: { type: String, require: true },
  userid: { type: Array, require: true },
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
