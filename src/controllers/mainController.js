const cepApi = require('../services/cepApi');

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

    search: async (request, response) => {        
            try {                   
                    const {zipcode} = request.body;
                    const {data: foundData} = await cepApi.get(`/cep/v2/${zipcode}`);
                    const local = `${foundData.street} - ${foundData.neighborhood}, ${foundData.city}`; 
                    
                    console.log('CEP: ' + zipcode);
                    console.log('Endereço: ' + local);

                    response.statusCode = 200;
                    return //Como inserir o valor no inpit address?

            } catch(err){
                console.log(err.data);
            }
        },
};

module.exports = mainController;