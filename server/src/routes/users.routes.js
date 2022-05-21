import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {authenticateRequest} from "../middlewares/authenticate.middlewares.js";
import {UserController} from "../controllers/user.controller.js";

const userRouter = express.Router();
//GET ALL
userRouter.get("/", authenticateRequest, UserController.getAllUsers);
// GET single user
userRouter.get("/:id", authenticateRequest, UserController.getUser);
// GET USER STATS
// userRouter.get("/stats", authenticateRequest, UserController);
// UPDATE
// userRouter.put("/:id", authenticateRequest, UserController);
// DELETE
// userRouter.delete("/:id",authenticateRequest, UserController);
// userRouter.post("/login", handleValidation(loginValidate), UserController);

export default userRouter;
