const express = require("express");
require("dotenv").config();
const cors=require("cors")
const cowsay = require("cowsay");
const error404 = require("./middleware/error404")
// const path = require("path")


const app = express();
const port = 3000;




//habilita recepción objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(cors());
app.options("*",cors())
// Recepción Client
// app.use(express.static(path.join(__dirname,"client/build")))
// Rutes

const monsterRoutes = require("./routes/monster_routes");
app.use(express.json()); // Habilito recepción de JSON en servidor


const userRoutes = require("./routes/users_routes");
app.use(express.json());

 
const favRoutes = require("./routes/fav_routes");
app.use(express.json());

//DOCUMENTACIÓN SWAGGER


// Get client
// app.get("*", (req,res)=>{res.sendFile(path.join(__dirname+"/client/build/index.html"))})


//USERS
app.use("/api/users", userRoutes)


//MONSTERS
app.use("/api/monsters",monsterRoutes)


//FAVORITES
app.use("/api/favs",favRoutes)



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


