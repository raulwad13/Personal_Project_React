const monsterController = require("../controllers/monster_controller");
const monsterRouter = require("express").Router();

// La enciclopedia pública es de solo lectura.
// Las rutas de edición se reservan para desarrollo; no hay autenticación todavía.
const soloDesarrollo = (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({ message: "Edición desactivada en producción." });
  }
  next();
};

// Consultar monstruos no requiere modificar la base de datos.
monsterRouter.get("/", monsterController.getMonster);

// Herramientas de administración disponibles solo fuera de producción.
monsterRouter.post("/", soloDesarrollo, monsterController.createMonster);
monsterRouter.post("/seed", soloDesarrollo, monsterController.createMonsters);
monsterRouter.put("/", soloDesarrollo, monsterController.editMonster);
monsterRouter.delete("/", soloDesarrollo, monsterController.deleteMonster);

module.exports = monsterRouter;
