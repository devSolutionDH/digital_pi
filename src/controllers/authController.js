const fs = require('fs');
const path = require('path');
const {v4: uuid} = require('uuid');
const bcrypt = require('bcryptjs');

const usersPath = path.join(__dirname, '..', 'database', 'users.json');

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

       const users = JSON.parse(fs.readFileSync(usersPath));
       const {name, email, cpf, birthday, cep, cel, address, user, password, file} = request.body;
       const passwordHash = bcrypt.hashSync(password);

       const newUser = {
            id: uuid(),
            name: name,
            email: email,
            cpf: cpf,
            birthday: birthday,
            cep: cep,
            cel: cel,
            address: address,
            user: user,
            password: passwordHash,
            file: file
       };
        
       users.push(newUser);

       fs.writeFileSync(usersPath, JSON.stringify(users));
        console.log(users); 

        return response.render('login', { 
            title: 'Login - Dev Solution',
            cssType: '/css/login.css',
            picture: '/image/login.png'
        });
        
    },
    
};

module.exports = authController;