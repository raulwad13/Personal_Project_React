const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DB_URL_ATLAS || process.env.MONGODB_URI || "mongodb://localhost:27017/monsters";

mongoose.connect(url, { serverSelectionTimeoutMS: 5000 }).catch((error) => {
  console.error("No se pudo conectar a MongoDB:", error.message);
});
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;
