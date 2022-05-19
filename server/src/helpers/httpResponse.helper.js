import MongoDbError from "../utilities/mongo.error.js";
import {FAILED_STATUS, SUCCESS_STATUS} from "../config/serverAppConfig.js";

export const errorResponse = (res, err) => {
    err = err.name === "MongoServerError" ? MongoDbError(err) : err;
    return res.status(err.getStatusCode() || 400)
        .json({
            data: null,
            message: err.message || 'Something went wrong',
            status: FAILED_STATUS
        })
}

export const successResponse = (res, data, code=200) => {
    res.status(code).send({
        data: data.data || null,
        message: data.message || "",
        status: SUCCESS_STATUS
    });
}
