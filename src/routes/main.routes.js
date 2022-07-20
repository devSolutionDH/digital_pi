const { Router } = require('express');
const mainRouter = Router();

const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController.redirectHome);
mainRouter.get('/home', mainController.homeScreen);
mainRouter.get('/home/search', mainController.searchScreen);
mainRouter.post('/home/search', mainController.search);

module.exports = mainRouter;