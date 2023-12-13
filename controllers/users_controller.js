const UserModel = require("../models/users_model");
const userSeed = require("../users.json");

// CREATE
const createUser = async (req, res) => {
  try {
    const users = await UserModel.create(req.body);

    res.status(201).json({ message: "the hunter born", users });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await UserModel.create(userSeed);

    res.status(201).json({ message: "the hunters born", users });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
// GET

const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find({}).select("-_id -__v");
    res.status(200).json(user);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPDATE

const editUsers = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { name: req.body.name },
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: `Don't foun the hunter${req.body.name}`,
      });
    }

    res.status(200).json({
      message: `the hunter improve`,
      user,
    });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.deleteOne({ name: req.body.name });
    res.status(200).json({ message: `hunter dies`, user });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const user = await UserModel.deleteMany({});
    res.status(200).json({ message: `all hunters dies`, user });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  createUser,
  createUsers,
  getUsers,
  editUsers,
  deleteUser,
  deleteUsers,
};
