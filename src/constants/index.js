const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const TOKEN_EXPIRES_TIME = process.env.TOKEN_EXPIRES_TIME || '3h';
const REFRESH_TOKEN_EXPIRES_TIME =
    process.env.REFRESH_TOKEN_EXPIRES_TIME || '10 days';
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_REFRESH_TOKEN_SECRET = process.env.ACCESS_REFRESH_TOKEN_SECRET;

const BREVO_USER = process.env.BREVO_USER;
const BREVO_PASS = process.env.BREVO_PASS;

const MAILJS_SERVICE_ID_1 = process.env.MAILJS_SERVICE_ID_1;
const MAILJS_TEMPLATE_ID_1 = process.env.MAILJS_TEMPLATE_ID_1;
const MAILJS_PUBLIC_KEY_1 = process.env.MAILJS_PUBLIC_KEY_1;
const MAILJS_PRIVATE_KEY_1 = process.env.MAILJS_PRIVATE_KEY_1;

const MAILJS_SERVICE_ID_2 = process.env.MAILJS_SERVICE_ID_2;
const MAILJS_TEMPLATE_ID_2 = process.env.MAILJS_TEMPLATE_ID_2;
const MAILJS_PUBLIC_KEY_2 = process.env.MAILJS_PUBLIC_KEY_2;
const MAILJS_PRIVATE_KEY_2 = process.env.MAILJS_PRIVATE_KEY_2;

module.exports = {
    PORT,
    TOKEN_EXPIRES_TIME,
    REFRESH_TOKEN_EXPIRES_TIME,
    ACCESS_TOKEN_SECRET,
    ACCESS_REFRESH_TOKEN_SECRET,
    BREVO_USER,
    BREVO_PASS,
    MAILJS_SERVICE_ID_1,
    MAILJS_TEMPLATE_ID_1,
    MAILJS_PUBLIC_KEY_1,
    MAILJS_PRIVATE_KEY_1,
    MAILJS_SERVICE_ID_2,
    MAILJS_TEMPLATE_ID_2,
    MAILJS_PUBLIC_KEY_2,
    MAILJS_PRIVATE_KEY_2,
};