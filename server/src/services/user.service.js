import {User} from "../models/user/user.data.js";

const Model = User;

/**
 * Get users list, later pagination will be added ( currentPage, pageOffset, total, lastPage)
 * @param queryParams
 * @returns {Promise<Query<Array<HydratedDocument<any, {}, {}>>, any, {}, any>>}
 */
export const getUsersList = async queryParams => {
    // LATER: add pagination
    return Model.model.find() ;
};

/**
 * get single user info
 * @param userId
 * @returns {Promise<Query<any, any, {}, any>>}
 */
export const getSingleUser = async userId => {
    return Model.model.findById(userId);
};
