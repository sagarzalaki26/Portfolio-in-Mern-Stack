const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String,
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);

module.exports = mongoose.model("Employee", employeeSchema);
