import Joi from "joi";

// minDomainSegments: like test@gmail.com, here domain segments 2
const Schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).max(255).required(),
    password: Joi.string().min(3).required()
});

const Validate = data => {
    const result = registrationSchema.validate(data, { abortEarly: false }); // abortEarly: false to return all error message
    result.value = data;
    return result;
}


export { Validate }
