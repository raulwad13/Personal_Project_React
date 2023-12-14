const mongoose = require("mongoose");
require("../config/db_mongo");

const favSchema = {

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  },

  monsters: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "monstruos",
    required: true,
  },
};

const TableSchema = mongoose.Schema(favSchema);

const Fav = mongoose.model("favoritos", TableSchema);

module.exports = Fav;
