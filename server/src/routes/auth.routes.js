import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {registrationValidate, loginValidate} from "../validations/auth.validations.js";
import {AuthController} from "../controllers/auth.controller.js";

const authRouter = express.Router();
authRouter.post("/register", handleValidation(registrationValidate), AuthController.registration);
authRouter.post("/login", handleValidation(loginValidate), AuthController.login);
// LATER: registration email validation, refresh token

export default authRouter;
