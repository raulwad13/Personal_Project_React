const userController= require("../controllers/users_controller")
const userRouter = require("express").Router();


// POST
userRouter.post("/", userController.createUser);

userRouter.post("/seed", userController.createUsers);


// GET
userRouter.get("/", userController.getUsers);

// PUT
userRouter.put("/", userController.editUsers);

// DELETE
userRouter.delete("/", userController.deleteUser);

userRouter.delete("/all", userController.deleteUsers);




module.exports = userRouter;