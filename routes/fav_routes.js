const favController = require("../controllers/fav_controller");
const favRouter = require("express").Router();

// POST
favRouter.post("/", favController.createFav);


// GET
favRouter.get("/", favController.getFav);


// DELETE
favRouter.delete("/", favController.deleteFav);




module.exports = favRouter;