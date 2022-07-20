const { Router } = require('express');
const authRouter = Router();

const authController = require('../controllers/authController');

authRouter.get('/login', authController.loginScreen);
authRouter.get('/register', authController.registerScreen);

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.create);

module.exports = authRouter;