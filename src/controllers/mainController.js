
const mainController = {

    redirectHome:  (request, response) => {
        return response.redirect('/home');
    },
    
    homePage: (request, response) => {
        return response.render('index', { 
            title: 'Home - Dev Solution',
            cssType: '/css/index.css'
        });
    },
}


module.exports = mainController;