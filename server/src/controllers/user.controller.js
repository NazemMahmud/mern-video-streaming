import { createUser, loginUser} from "../services/auth.service.js";
import {handleError} from "../middlewares/index.js";
import {successResponse} from "../helpers/httpResponse.helper.js";
import {generateToken} from "../helpers/jwt.helper.js";


/**
 * registration for a user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registration = async (req, res) => {
    try {
        const response = await createUser(req.body);
        successResponse(res, response, 201)
    } catch (err) {
        handleError(err, req, res);
    }
}


/**
 * login a user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res) => {
    try {
        // const query = req.query.new;
        // if (req.user.isAdmin) {
        //     try {
        //         const users = query
        //             ? await User.find().sort({ _id: -1 }).limit(5)
        //             : await User.find();
        //         res.status(200).json(users);
        //     } catch (err) {
        //         res.status(500).json(err);
        //     }
        // } else {
        //     res.status(403).json("You are not allowed to see all users!");
        // }
        //

        // const response = await loginUser(req.body);
        // response.data.accessToken = generateToken(response.data)
        // successResponse(res, response)
    } catch (err) {
        // handleError(err, req, res);
    }
}


export const UserController = { getAllUsers }
