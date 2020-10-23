const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
