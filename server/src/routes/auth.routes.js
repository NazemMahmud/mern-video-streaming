import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {registrationValidate} from "../validations/auth.validations.js";
import {AuthController} from "../controllers/auth.controller.js";

const authRouter = express.Router();
authRouter.post("/register", handleValidation(registrationValidate), AuthController.registration);
// LATER: registration email validation, refresh token

export default authRouter;
