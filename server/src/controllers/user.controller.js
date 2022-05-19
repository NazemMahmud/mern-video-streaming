import {handleError} from "../middlewares/index.js";
import {successResponse} from "../helpers/httpResponse.helper.js";
import {isAdmin} from "../helpers/permission.helper.js";
import {getUsersList} from "../services/user.service.js";


/**
 * get users list: only for admin
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res) => {
    // LATER: pagination
    isAdmin(req.user.isAdmin, res);
    try {
        const queryParams = req.query;
        const users = await getUsersList(queryParams);
        successResponse(res, users);
    } catch (err) {
        handleError(err, req, res);
    }
};


export const UserController = { getAllUsers };
