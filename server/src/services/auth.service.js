import bcrypt from "bcryptjs";
import {User} from "../models/user/user.data.js";
import {SALT} from "../config/env.config.js";
import {NotFoundError, UnAuthorized} from "../utilities/error-generate.js";

const Model = User;

/**
 * Create new user while registering
 *
 * @param request
 * @returns {Promise<{message: string}>}
 */
export const createUser = async request => {
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


/**
 * While logging a new user
 * @param request
 * @returns {Promise<{data: {id, email: *, username}}>}
 */
export const loginUser = async request => {
    const user = await Model.getOne({email: request.email});
    if(!user) {
        throw new NotFoundError("User not found");
    }
    // Password valid check
    const validPassword = await bcrypt.compare(request.password, user.password);
    if(!validPassword) {
        throw new UnAuthorized("Invalid Password");
    }

    return {
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    };
}
