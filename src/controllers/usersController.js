const usersController = {

    profileScreen: (request, response) => {
        response.render('profile', { 
            title: 'Perfil - Dev Solution',
            cssType: '/css/profile.css',
            picture:'/image/Editada para perfil finclass (2).jpg'
        });
    },

    dashboardScreen: (request, response) => {
        response.render('dashboard', { 
            title: 'Filas - Dev Solution',
            cssType: '/css/dashboard.css'
        });
    },
};

module.exports = usersController;