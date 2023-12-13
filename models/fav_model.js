const mongoose = require("mongoose");
require("../config/db_mongo");

const favSchema ={
    name:String,
    type:String,
    species:String,
};


const TableSchema=mongoose.Schema(favSchema);


const Fav=mongoose.model("favoritos",TableSchema);

module.exports=Fav;