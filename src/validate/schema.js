const Joi = require("joi");

function validateStringRequired() {
  return Joi.string().required();
}
function validateString() {
  return Joi.string();
}

function validateNumber() {
  return Joi.number().integer().required();
}

const emailVelidate = () => {
  return validateString().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "vn"] },
  });
};

exports.signUpValidateSchema = Joi.object({
  user_name: validateStringRequired().min(3),
  email: emailVelidate(),
  password: validateStringRequired().min(6),
  date_of_birth: validateString(),
  gender: validateString(),
  phone_number: validateString(),
});

exports.signInValidateSchema = Joi.object({
  email: emailVelidate(),
  password: validateStringRequired().min(6),
});

exports.sendVerificationCodeValidateSchema = Joi.object({
  email: emailVelidate(),
});

exports.verifyCodeSchema = Joi.object({
  code: validateNumber(),
});

exports.refreshTokenValidateSchema = Joi.object({
  refresh_token: validateStringRequired(),
});

exports.profileValidateSchema = Joi.object({
  id: validateStringRequired(),
});

// exports. customTokenValidateSchema = Joi.object({
//   expires_in: Joi.string()
//     .regex(/[smhd]/)
//     .required(),
// });
