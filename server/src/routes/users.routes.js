import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {authenticateRequest} from "../middlewares/authenticate.middlewares.js";
import {UserController} from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.get("/", authenticateRequest, UserController.getAllUsers); // GET ALL
userRouter.get("/:id", authenticateRequest, UserController.getUser); // GET single user
// LATER:
// GET USER STATS: userRouter.get("/stats", authenticateRequest, UserController);
// UPDATE: userRouter.put("/:id", authenticateRequest, UserController);
// DELETE: userRouter.delete("/:id",authenticateRequest, UserController);

export default userRouter;
