import {ForbiddenErrors} from "../utilities/error-generate.js";
import {errorResponse} from "../helpers/httpResponse.helper.js";


// if user is not admin, then permission denied
export const isAdmin = async (req, res, next) => {
    if (!req.user.isAdmin) {
        const error = new ForbiddenErrors('You are not permitted');
        errorResponse(res, error);
    }
    return next();
}
