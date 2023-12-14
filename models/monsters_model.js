const mongoose = require("mongoose");
require("../config/db_mongo");

// Crear schema
const monsterSchema = {
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  locations: {
    type: Array,
    required: true,
  }
};

// Create schema
const TableSchema = mongoose.Schema(monsterSchema);

// Create colection
const Monster = mongoose.model("monstruos", TableSchema);

module.exports = Monster;
