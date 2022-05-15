import Joi from "joi";


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

export { registrationValidate }
