const monsterController = require("../controllers/monster_controller");
const monsterRouter = require("express").Router();

// POST
monsterRouter.post("/", monsterController.createMonster);

monsterRouter.post("/seed", monsterController.createMonsters);


// GET
monsterRouter.get("/", monsterController.getMonster);

// PUT
monsterRouter.put("/", monsterController.editMonster);

// DELETE
monsterRouter.delete("/", monsterController.deleteMonster);

monsterRouter.delete("/all", monsterController.deleteMonsters);




module.exports = monsterRouter;
