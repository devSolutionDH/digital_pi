const { Router } = require('express');
const mainRouter = Router();

const mainController = require('../controllers/mainController');


mainRouter.get('/', mainController.redirectHome);
mainRouter.get('/home', mainController.homePage);


module.exports = mainRouter;