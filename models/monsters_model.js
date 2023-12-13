const mongoose = require("mongoose");
require("../config/db_mongo");

// Crear schema
const monsterSchema = {
  name: String,
  type: String,
  species: String,
  locations: Array,
};

// Create schema
const TableSchema = mongoose.Schema(monsterSchema);

// Create colection
const Monster = mongoose.model("monstruos", TableSchema);

module.exports = Monster;
