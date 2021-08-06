const Joi = require("joi");


// validation to signup
const signupValidation =(data)=>{
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .email(),
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.ref('password'),
    
    })

    return schema.validate(data);

}

// validation to signin
const signinValidation =(data)=>{
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    
    })

    return schema.validate(data);

}

module.exports= {
    signupValidation,
    signinValidation
}