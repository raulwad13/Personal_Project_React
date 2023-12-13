const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DB_URL_ATLAS || "mongodb://localhost:27017/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;
