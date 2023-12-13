const FavModel = require("../models/fav_model");
const favSeed=require("../monsters.json");

//CREATE

const createFav = async (req, res) => {
    try {
      const favs = await FavModel.create({users,monsters});
  
      res.status(201).json({ message: "the monster save as fav", favs });
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


  module.exports={
    createFav,
    getFav,
    deleteFav,
  }