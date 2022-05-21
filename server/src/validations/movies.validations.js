import Joi from "joi";

const createSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).max(255).required(),
    password: Joi.string().min(3).required()
});

const createValidate = data => {
    const result = createSchema.validate(data, { abortEarly: false }); // abortEarly: false to return all error message
    result.value = data;
    return result;
}


export { Validate }
