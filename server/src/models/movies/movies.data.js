import {MovieModel} from "./movies.schema.js";

/**
 * create a new movie item
 * @param data
 * @returns {Promise<*>}
 */
const createNew = async data => {
    const model = new MovieModel(data);
    return model.save();
}


export const Movie = {
    model: MovieModel,
    createNew,
}
