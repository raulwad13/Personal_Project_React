const FavModel = require("../models/fav_model");
const User = require("../models/users_model");
const Monster = require("../models/monsters_model")

//CREATE

const createFav = async (req, res) => {
  try {
    const { user_id,monster_id } = req.body;

    // const userFavs = await User.find({ _id: user_id});
    // const favMonster = await Monster.find({ _id: monster_id});

    // console.log(userFavs);

    // const monster = favMonster[0]._id.toString();
    // const user = userFavs[0]._id.toString();
    const favObj = {
      user: user_id,
      monsters:monster_id,
    };

    let result = await new FavModel(favObj).save();
    res.status(201).json({ message: "the monster save as fav", favs: result });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};



//GET

const getFav = async (req, res) => {
  try {
    const fav = await FavModel.find({}).select("-_id -__v");
    res.status(200).json(fav);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

//DELETE

const deleteFav = async (req, res) => {
  try {
    const fav = await FavModel.deleteOne({ name: req.body.name });
    res.status(200).json({ message: `delete monster`, fav });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  createFav,
  getFav,
  deleteFav,
};
