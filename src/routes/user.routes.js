const express = require('express');
const usersController = require('../controller/user.controller.js');
const validateParams = require('../middleware/ValidateParam.js').default;
const {
    signUpValidateSchema,
    refreshTokenValidateSchema,
    signInValidateSchema,
    profileValidateSchema,
    customTokenValidateSchema,
} = require('../validate/schema.js');

const router = express.Router();

router.post(
    '/sign-up',
    validateParams(signUpValidateSchema),
    usersController.signUp,
);

router.post(
    '/refresh-token',
    validateParams(refreshTokenValidateSchema),
    usersController.refreshToken,
);

router.post(
    '/sign-in',
    validateParams(signInValidateSchema),
    usersController.signIn,
);

router.post(
    '/custom-token',
    validateParams(customTokenValidateSchema),
    usersController.customToken,
);

// router.use(JWToken.verifyToken);

router.get(
    '/profile',
    validateParams(profileValidateSchema),
    usersController.profile,
);

router.delete(
    '/delete',
    validateParams(profileValidateSchema),
    usersController.deleteUser,
);

module.exports = router;