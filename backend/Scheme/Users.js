const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
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
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
