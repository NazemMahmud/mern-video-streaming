import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import MongoDBConnect from "./src/config/mongodb.connect.js"; // db config
import Router from "./src/routes/index.js";

const app = express();

// middlewares
app.use(bodyParser.json());

// cors middleware
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"]
}
app.use(cors(corsOptions));

// api routes
Router(app);

export {app}
