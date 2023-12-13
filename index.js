const express = require("express");
require("dotenv").config();
const cowsay = require("cowsay");
const error404 = require("./middleware/error404")

const app = express();
const port = 3000;

//habilita recepción objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutes
const monsterRoutes = require("./routes/monster_routes");
app.use(express.json()); // Habilito recepción de JSON en servidor

// PONER DOCUMENTACIÓN SWAGGER O JSDOC!!!


app.use("/api/monsters",monsterRoutes)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("*", error404);

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Lets Go to the Hunting. Funcionando en: http://localhost:${port}`,
      e: "oO",
      T: "U ",
    })
  );
});
