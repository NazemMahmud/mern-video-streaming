// check this gist for more: https://gist.github.com/rluvaton/a97a8da46ab6541a3e5702e83b9d357b


const getErrorMessage = err => {
    switch (err.code) {
        case 11000:
            // message format like this
            // E11000 duplicate key error collection: mern-video-stream.users index: name_1 dup key: { name: "test user 1"}
            const keys = err.message.split("{ ");
            return {
                message: keys[1].split(":")[0] + ' already exist'
            };
        default:
            return {
                message: "Something went wrong"
            }
    }
}

const MongoDbError = err => {
    return {
        message: getErrorMessage(err),
        name: err.name,
        getStatusCode() {
            return 422;
        }
    }
};

export default MongoDbError;
