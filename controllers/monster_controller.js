const MonsterModel = require("../models/monsters_model");
const monsterSeed = require("../monsters.json");

// CREATE
const createMonster = async (req, res) => {
  try {
    const monsters = await MonsterModel.create(req.body);

    res.status(201).json({ message: "the monster born", monsters });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createMonsters = async (req, res) => {
  try {
    // Evita duplicar la colección al pulsar dos veces el botón de carga.
    const existing = await MonsterModel.countDocuments();
    if (existing > 0) {
      return res.status(409).json({ message: "Ya hay monstruos en la base de datos." });
    }
    const monsters = await MonsterModel.insertMany(monsterSeed);
    res.status(201).json({ message: "Monstruos cargados", total: monsters.length });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
// GET

const getMonster = async (req, res) => {
  try {
    // La enciclopedia puede mostrarse incluso sin MongoDB.
    // Cuando hay conexión, usamos los datos guardados; si no, los del JSON.
    if (MonsterModel.db.readyState !== 1) {
      return res.status(200).json(monsterSeed);
    }
    const monster = await MonsterModel.find({}).select("-_id -__v").lean();
    res.status(200).json(monster.length ? monster : monsterSeed);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPDATE

const editMonster = async (req, res) => {
  try {
    const monster = await MonsterModel.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    if (!monster) {
      return res.status(404).json({
        message: `Don't found the monster ${req.body.name}`,
      });
    }

    res.status(200).json({
      message: `monster evolve`,
      monster,
    });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE

const deleteMonster = async (req, res) => {
  try {
    const monster = await MonsterModel.deleteOne({ name: req.body.name });
    res.status(200).json({ message: `hunted monster`, monster });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteMonsters = async (req, res) => {
  try {
    const monster = await MonsterModel.deleteMany({});
    res.status(200).json({ message: `hunted monster`, monster });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  createMonster,
  createMonsters,
  getMonster,
  editMonster,
  deleteMonster,
  deleteMonsters,
};
