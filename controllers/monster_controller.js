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
    const monsters = await MonsterModel.create(monsterSeed);

    res.status(201).json({ message: "the monster born", monsters });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
// GET

const getMonster = async (req, res) => {
  try {
    const monster = await MonsterModel.find({})
      .select("-_id -__v");
    res.status(200).json(monster);
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
