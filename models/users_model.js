const mongoose = require("mongoose");
require("../config/db_mongo");

//Crear schema
const userSchema = {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pasword: {
    type: String,
    required: true,
  },
};

const TableUserSchema = mongoose.Schema(userSchema);

const User = mongoose.model("usuarios", TableUserSchema);

module.exports = User;
