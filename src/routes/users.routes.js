const { Router } = require('express');
const usersRouter = Router();

const usersController = require('../controllers/usersController');
const isAuthorized = require('../middleware/isAuthorized');

usersRouter.get('/profile', isAuthorized, usersController.profileScreen);
usersRouter.get('/dashboard', isAuthorized, usersController.dashboardScreen);

module.exports = usersRouter;