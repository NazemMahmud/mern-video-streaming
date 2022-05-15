import jwt from "jsonwebtoken";
import {JWT_SECRET_KEY} from "../config/env.config.js";


export const generateToken = user => {
    // LATER payload need to update accordingly
    return jwt.sign({
            payload: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        },
        JWT_SECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });
}

export const verifyToken = token => {
    return jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return false;
        }
        return decoded;
    });
};
