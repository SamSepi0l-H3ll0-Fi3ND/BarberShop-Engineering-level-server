const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    number: Joi.string().length(9).required(),
    password: Joi.string().min(6).required(),
  });
  const validationData = userValidationSchema.validate(request.body);
  response.send(validationData);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
