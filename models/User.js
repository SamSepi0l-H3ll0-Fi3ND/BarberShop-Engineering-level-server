const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  number: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  favorite: [],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
