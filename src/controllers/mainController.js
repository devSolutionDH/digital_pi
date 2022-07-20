
const mainController = {

    redirectHome:  (request, response) => {
        return response.redirect('/home');
    },
    
    homeScreen: (request, response) => {
        return response.render('index', { 
            title: 'Home - Dev Solution',
            cssType: '/css/index.css'
        });
    },

    searchScreen: (request, response) => {
        return response.render('search', { 
            title: 'Buscar - Dev Solution',
            cssType: '/css/search.css',
            picture: '/image/notebook com mão.png'
        });
    },

    search: (request, response) => {

        console.table(request.body);
        
        return response.render('search', { 
            title: 'Buscar - Dev Solution',
            cssType: '/css/search.css',
            picture: '/image/notebook com mão.png'
        });
    },
}

module.exports = mainController;