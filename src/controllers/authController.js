

const authController = {

    loginScreen: (request, response) => {
        return response.render('login', { 
            title: 'Login - Dev Solution',
            cssType: '/css/login.css',
            picture: '/image/login.png'
        })
    },

    login: (request, response) => {

        console.table(request.body);

        return response.render('profile', {
            title: 'Perfil - Dev Solution',
            cssType: '/css/profile.css',
            picture: '/image/Editada para perfil finclass (2).jpg'
        });
    },

    registerScreen: (request, response) => {
        return response.render('register', { 
            title: 'Cadastro - Dev Solution',
            cssType: '/css/register.css',
            picture: '/image/notebook.png'
        });
    },

    create: (request, response) => {

        console.log(request.body);

        return response.redirect('/user/profile', { 
            title: 'Perfil - Dev Solution',
            cssType: '/css/profile.css',
            picture: '/image/Editada para perfil finclass (2).jpg'
        });
    },
    
};


module.exports = authController;