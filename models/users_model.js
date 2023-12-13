const mongoose = require("mongoose");
require("../config/db_mongo");

//Crear schema
const userSchema ={
    id:Number,
    name: String,
    url:String,
    email:String,
    pasword:String,
};

const TableUserSchema = mongoose.Schema(userSchema);

const User = mongoose.model("usuarios",TableUserSchema);

module.exports= User;

