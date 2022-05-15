import {UserModel} from "./user.schema.js";

/**
 * get single data based on condition
 * @param condition
 * @returns {Promise<Query<any, any, {}, any>>}
 */
const getOne = async condition => {
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

export const User = {
    model: UserModel,
    getOne,
    createNew
}
