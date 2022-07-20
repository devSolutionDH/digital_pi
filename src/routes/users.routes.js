const { Router } = require('express');
const usersRouter = Router();

const usersController = require('../controllers/usersController');

usersRouter.get('/profile', usersController.profileScreen);
usersRouter.get('/dashboard', usersController.dashboardScreen);

module.exports = usersRouter;