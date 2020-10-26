const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs'); //*

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
  // phoneNumber: { type: Number, required: true },
  // breaks: { type: Array, required: true }
  // checkPassword: function (inputPassword) //*
  // {
  //   return 
  //   bcrypt.compareSync(inputPassword,
  //     this.password)
  // },
  // hashPassword: plainTextPassword => { //*
  //   return
  //   bcrypt.hashSync(plainTextPassword, 10)
  // }
});



const User = mongoose.model("User", UserSchema);

module.exports = User;
