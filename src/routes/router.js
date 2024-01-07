const express = require('express');
const usersRouter = require('./user.routes.js');

const apiRoute = express();

apiRoute.use('/user', usersRouter);

module.exports = apiRoute;