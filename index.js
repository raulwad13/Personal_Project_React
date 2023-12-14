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


const userRoutes = require("./routes/users_routes");
app.use(express.json());

 
const favRoutes = require("./routes/fav_routes");
app.use(express.json());


//DOCUMENTACIÓN SWAGGER

//USERS
app.use("/api/users", userRoutes)
app.get("/",(req,res)=>{
  res.send("Hello Hunter!")
})

//MONSTERS
app.use("/api/monsters",monsterRoutes)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//FAVORITES
app.use("/api/favs",favRoutes)
app.get("/",(req,res)=>{
  res.send("Hello FavsList!")
})


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


