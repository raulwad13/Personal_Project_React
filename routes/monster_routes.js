const monsterController = require("../controllers/monster_controller");
const monsterRouter = require("express").Router();

// POST
monsterRouter.post("/", monsterController.createMonster);

// La carga inicial solo está disponible en desarrollo local.
monsterRouter.post("/seed", (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({ message: "Seed disabled in production" });
  }
  next();
}, monsterController.createMonsters);


// GET
monsterRouter.get("/", monsterController.getMonster);

// PUT
monsterRouter.put("/", monsterController.editMonster);

// DELETE
monsterRouter.delete("/", monsterController.deleteMonster);

// No exponemos un endpoint para borrar toda la colección.




module.exports = monsterRouter;
