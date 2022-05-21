import {handleError} from "../middlewares/index.js";
import {errorResponse, successResponse} from "../helpers/httpResponse.helper.js";
import {isAdmin} from "../helpers/permission.helper.js";
import {getSingleUser, getUsersList} from "../services/user.service.js";
import UserViewModel from "../models/user/users.view.js";


/**
 * get users list: only for admin
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res, next) => {
    // LATER: pagination
    isAdmin(req.user.isAdmin, res);
    try {
        const queryParams = req.query;
        const users = await getUsersList(queryParams);
        successResponse(res, UserViewModel.getAllUsers(users));
    } catch (err) {
        handleError(err, req, res, next);
    }
};

/**
 * get single user info
 * 2 error handle: id is in DB; id is valid string
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const getUser = async (req, res, next) => {
    try {
        const user = await getSingleUser(req.params.id);
        successResponse(res, UserViewModel.getUser(user));
    } catch (err) {
        console.log(err);
        handleError(err, req, res, next);
    }
};


export const UserController = { getAllUsers, getUser };
