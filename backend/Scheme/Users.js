const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxLength: 100,
  },
  email: {
    type: String,
    require: true,
    maxLength: 100,
  },
  password: {
    type: String,
    require: true,
  },
  signup_date: {
    type: String,
    require: true,
  },
  permission: {
    type: Boolean,
    require: true,
    default: true,
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
