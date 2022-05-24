import Joi from "joi";

const createSchema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    img: Joi.string().required(),
    //     imageTitle: { type: String },
    //     imageSmall: { type: String },
    //     trailer: { type: String },
    //     video: { type: String },
    //     year: { type: String },
    //     limit: { type: Number },
    //     genre: { type: String },
    //     isMovie: { type: Boolean, default: true },
    // },
});

const createValidate = data => {
    const result = createSchema.validate(data, { abortEarly: false }); // abortEarly: false to return all error message
    result.value = data;
    return result;
};


export { createValidate };
