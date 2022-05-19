import {verifyToken} from "../helpers/jwt.helper.js";
import {UnAuthorized} from "../utilities/error-generate.js";
import {errorResponse} from "../helpers/httpResponse.helper.js";

export const authenticateRequest = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let errorMessage = 'Unauthenticated request';
    if (authHeader) {
        const result = verifyToken(authHeader.replace('Bearer ', ''));
        if (result) {
            req.user = result.payload;
            return next();
        }
        errorMessage = 'Invalid token';
    }

    const error = new UnAuthorized(errorMessage);
    return errorResponse(res, error);
}
