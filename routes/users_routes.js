const userRouter = require("express").Router();


// POST
userRouter.post("/", userController.createUser);

userRouter.post("/seed", userController.createUsers);


// GET
userRouter.get("/", userController.getUsers);

// PUT
userRouter.put("/", userController.editUsers);

// DELETE
userRouter.delete("/", userController.deleteUsers);

userRouter.delete("/all", userController.deleteUserss);




module.exports = userRouter;