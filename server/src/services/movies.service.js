import {Movie as Model} from "../models/movies/movies.data.js";
import {NotFoundError, UnAuthorized} from "../utilities/error-generate.js";
import {CREATE_SUCCESS, SOMETHING_WENT_WRING} from "../config/constants.js";

/**
 * Create new user while registering
 *
 * @param request
 * @returns {Promise<{message: string}>}
 */
export const createNew = async request => {
    if (await Model.createNew(request.body)) {
        return {message: CREATE_SUCCESS};
    }

    throw new Error(SOMETHING_WENT_WRING);
};
