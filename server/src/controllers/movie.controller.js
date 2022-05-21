import {handleError} from "../middlewares/index.js";
import {errorResponse, successResponse} from "../helpers/httpResponse.helper.js";
import {isAdmin} from "../helpers/permission.helper.js";
import {getSingleUser, getUsersList} from "../services/user.service.js";
import UserViewModel from "../models/user/users.view.js";
import {authenticateRequest} from "../middlewares/authenticate.middlewares.js";
import movieRouter from "../routes/movies.routes.js";


/**
 * store a movie info: only for admin
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const store = async (req, res, next) => {
    // tasks: validation check before come here
    try {
    //  newMovie = new Movie(req.body); // ne movie object
    //  const savedMovie = await newMovie.save(); // save
    //     successResponse(res, UserViewModel.getAllUsers(users)); // 201 created
    } catch (err) {
    //     handleError(err, req, res, next); //  res.status(500).json(err);
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


export const MovieController = { store, getAll, show };
