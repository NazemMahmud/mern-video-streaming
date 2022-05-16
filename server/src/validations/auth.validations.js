import Joi from "joi";

// minDomainSegments: like test@gmail.com, here domain segments 2
const registrationSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).max(255).required(),
    password: Joi.string().min(3).required()
});

const registrationValidate = data => {
    const result = registrationSchema.validate(data, { abortEarly: false }); // abortEarly: false to return all error message
    result.value = data;
    return result;
}

const loginSchema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).required(),
    password: Joi.string().min(3).required(),
});

const loginValidate = data => {
    const result = loginSchema.validate(data, {abortEarly: false});
    result.value = data;
    return result;
}

export { registrationValidate, loginValidate }
