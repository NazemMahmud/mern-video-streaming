import bcrypt from "bcryptjs";
import {User} from "../models/user/user.data.js";
import {DuplicateKeyError} from "../utilities/error-generate.js";
import {SALT} from "../config/env.config.js";

const Model = User;


/**
 * Create new user while registering
 *
 * @param request
 * @returns {Promise<{message: string}>}
 */
export const createUser = async request => {
    // check duplicate email
    // let user = await Model.getOne({email: request.email});
    // if(user) {
    //     throw new DuplicateKeyError("Email already exist");
    // }

    // hash password
    const salt = await bcrypt.genSalt(parseInt(SALT));
    const hashedPassword = await bcrypt.hash(request.password, salt);

    if (await Model.createNew({
        name: request.name,
        email: request.email,
        password: hashedPassword
    })) {
        return {message: 'Data created successfully'}
    }

    throw new Error('Something went wrong')
}
