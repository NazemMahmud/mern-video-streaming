import {User} from "../models/user/user.data.js";
import {NotFoundError} from "../utilities/error-generate.js";
import {NO_DATA_FOUND} from "../config/constants.js";

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
 * check id is valid string of length 24 (for mongo _id)
 * @param userId
 * @returns {Promise<Query<any, any, {}, any>>}
 */
export const getSingleUser = async userId => {
    if (userId.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await Model.model.findById(userId);
        if (user) {
            return user;
        }
    }

   throw new NotFoundError(NO_DATA_FOUND);
};
