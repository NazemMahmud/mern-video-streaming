import {handleError} from "../middlewares/index.js";
import {errorResponse, successResponse} from "../helpers/httpResponse.helper.js";
import UserViewModel from "../models/user/users.view.js";
import {createNew} from "../services/movies.service.js";


/**
 * store a movie info: only for admin
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const store = async (req, res, next) => {
    try {
        const response = await createNew(req.body);
        // successResponse(res, response)
    //     successResponse(res, UserViewModel.getAllUsers(users)); // 201 created
    } catch (err) {
        handleError(err, req, res, next);
    }
};


/**
 * get movies list
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAll = async (req, res, next) => {
    // LATER: pagination, copied from user
    // isAdmin(req.user.isAdmin, res);
    // try {
    //     const queryParams = req.query;
    //     const users = await getUsersList(queryParams);
    //     successResponse(res, UserViewModel.getAllUsers(users));
    // } catch (err) {
    //     handleError(err, req, res, next);
    // }
};

/**
 * get single movie info
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const show = async (req, res, next) => {
    // LATER: copied from user
    // try {
    //     const user = await getSingleUser(req.params.id);
    //     successResponse(res, UserViewModel.getUser(user));
    // } catch (err) {
    //     console.log(err);
    //     handleError(err, req, res, next);
    // }
};


export const MoviesController = { store, getAll, show };
