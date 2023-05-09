const Joi = require('joi');


const selectSchema = Joi.object({
  
    cont_name: Joi.string().required(),
    sel_name: Joi.string().required(),
})

const selectValidation = async (req,res, next) =>{
    const payload = {
        cont_name: req.body.name,
        sel_name: req.body.email,   
    }
    const { error } = selectSchema.validate(payload);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }else{
        next();
    }
}
// exports.validateSignup = validator(dataSchema); 
module.exports = selectValidation;