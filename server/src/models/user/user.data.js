import {UserModel} from "./user.schema.js";

/**
 * get single data based on condition
 * @param condition
 * @returns {Promise<Query<any, any, {}, any>>}
 */
const findOne = async condition => {
    return UserModel.findOne(condition);
}

/**
 * create a new user
 * @param data
 * @returns {Promise<*>}
 */
const createNew = async data => {
    const model = new UserModel(data);
    return model.save();
}

// get all users list
const findAll = async () => {
    // LATER: add pagination when necessary
    return UserModel.find();
};

export const User = {
    model: UserModel,
    findOne,
    createNew,
    findAll
}
