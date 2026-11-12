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
  },
  // Estos campos aparecen en las fichas del frontend.
  description: { type: String, default: "" },
  weaknesses: { type: Array, default: [] },
  elements: { type: Array, default: [] },
  ailments: { type: Array, default: [] },
  resistances: { type: Array, default: [] },
  rewards: { type: Array, default: [] }
};

// Create schema
const TableSchema = mongoose.Schema(monsterSchema);

// Create colection
const Monster = mongoose.model("monstruos", TableSchema);

module.exports = Monster;
