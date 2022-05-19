import {ForbiddenErrors} from "../utilities/error-generate.js";
import {errorResponse} from "./httpResponse.helper.js";

// if user is not admin, then permission denied
export const isAdmin = (admin, res) => {
    if (!admin) {
        const error = new ForbiddenErrors('You are not permitted');
        errorResponse(res, error);
    }
}
