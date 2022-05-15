import MongoDbError from "../utilities/mongo.error.js";

export const errorResponse = (res, err) => {
    console.log("HEREEEEEEEEEE asdsad: ", err.message);
    err = err.name === "MongoServerError" ? MongoDbError(err) : err;
        // console.log("HEREEEEEEEEEEEEEEE: ", err.name);
    // console.log("HEREEEEEEEEEE asdsad: ", err.code);

    return res.status(err.getStatusCode() || 400)
        .json({
            data: null,
            message: err.message || 'Something went wrong',
            status: 'failed'
        })
}

export const successResponse = (res, data, code=200) => {
    res.status(code).send({
        data: data.data || null,
        message: data.message || "",
        status: 'success'
    });
}
