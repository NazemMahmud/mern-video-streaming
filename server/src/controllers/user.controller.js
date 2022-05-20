import {handleError} from "../middlewares/index.js";
import {successResponse} from "../helpers/httpResponse.helper.js";
import {isAdmin} from "../helpers/permission.helper.js";
import {getUsersList} from "../services/user.service.js";
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

const getUser = async (req, res, next) => {
    try {
        // const user = await User.findById(req.params.id);
        // const { password, ...info } = user._doc;
        // res.status(200).json(info);
        //
        // const user = await UserService.getLoggedInUser(req.user.id);
        // res.status(200).send(UserViewModel.authUser(user));
    } catch (err) {
        // res.status(500).json(err);
        //
        handleError(err, req, res, next);
    }
};


export const UserController = { getAllUsers, getUser };
