const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userContactNumber: { type: String, required: true },
    userPassword: { type: String, required: true, unique: true },
  },
  {
    collection: "Users",
  }
);

const model = mongoose.model("Users", Users);

module.exports = model;
