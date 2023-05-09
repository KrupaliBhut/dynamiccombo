const Joi = require('joi');
const dataSchema = Joi.object({
  
    name: Joi.string().required(),
    email: Joi.string().email({
        minDomainSegments: 3,
        tlds: { allow: ["com", "net","org"] },
      }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
      "string.empty": `Password cannot be empty`,
      "any.required": `Password is required`,
    }),
   
})

const userValidation = async (req,res, next) =>{
    const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const { error } = dataSchema.validate(payload);

    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }else{
        next();
    }
}
// exports.validateSignup = validator(dataSchema); 
module.exports = userValidation;