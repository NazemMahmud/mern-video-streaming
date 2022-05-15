import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config

const app = express();

// middlewares
app.use(bodyParser.json());

// cors middleware
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"], // TODO: whitelist api, later from env file
}
app.use(cors(corsOptions));

// api routes

export {app}
