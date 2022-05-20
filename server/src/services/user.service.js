import {User} from "../models/user/user.data.js";

const Model = User;

/**
 * Get users list, later pagination will be added ( currentPage, pageOffset, total, lastPage)
 * @param queryParams
 * @returns {Promise<{data: Query<Array<HydratedDocument<unknown, {}, {}>>, Document<unknown, any, unknown> & Require_id<unknown>, {}, any>}>}
 */
export const getUsersList = async queryParams => {
    // LATER: add pagination
    return Model.findAll() ;
};
