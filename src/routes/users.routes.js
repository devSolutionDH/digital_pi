const { Router } = require('express');
const usersRouter = Router();

const usersController = require('../controllers/usersController');
const isAuthorized = require('../middleware/isAuthorized');

usersRouter.get('/profile', isAuthorized, usersController.profileScreen);
usersRouter.get('/dashboard', isAuthorized, usersController.dashboardScreen);
usersRouter.post('/dashboard', isAuthorized, usersController.carScreen);

module.exports = usersRouter;