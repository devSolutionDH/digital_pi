const { Router } = require('express');
const authRouter = Router();

const authController = require('../controllers/authController');


authRouter.get('/login', authController.loginScreen);
authRouter.post('/login', authController.login);

authRouter.get('/register', authController.registerScreen);
authRouter.post('/register', authController.create);

module.exports = authRouter;