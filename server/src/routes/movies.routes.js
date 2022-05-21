import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {authenticateRequest} from "../middlewares/authenticate.middlewares.js";
import {MovieController} from "../controllers/movie.controller.js";
import {isAdmin} from "../middlewares/permissions.middleware.js";

const movieRouter = express.Router();

// tasks: handle authenticate user, admin user, form validation
movieRouter.post("/", authenticateRequest, handleValidation(isAdmin), MovieController.store);
// movieRouter.get("/", authenticateRequest, MovieController.getAll); // GET ALL
// movieRouter.get("/", authenticateRequest, MovieController.show); // GET single
// movieRouter.put("/:id", authenticateRequest, MovieController); // UPDATE
// movieRouter.delete("/:id",authenticateRequest, MovieController); // DELETE

export default movieRouter;
