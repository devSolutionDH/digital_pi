const fs = require('fs');
const path = require('path');
const {v4: uuid} = require('uuid');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, "uploads/");
    },
    filename: function(request, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

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

            const { user, password } = request.body;
            const users = JSON.parse(fs.readFileSync(usersPath));

            const userFound = users.find(item => item.user === user);

            if(!userFound){
                return response.status(401).render('login', { 
                    title: 'Login - Dev Solution',
                    cssType: '/css/login.css',
                    picture: '/image/login.png'
                });
            };
            
            const checkPassword = bcrypt.compareSync(password, userFound.password);

            if(!checkPassword){
                return response.status(401).render('login', { 
                    title: 'Login - Dev Solution',
                    cssType: '/css/login.css',
                    picture: '/image/login.png'
                });
            };
            
            request.session.idUser = userFound.id;
            request.session.isAuthorized = true;

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
            
        console.log(request.file);

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
                password: bcrypt.hashSync(password),
                file: file
        };
            
        users.push(newUser);

        fs.writeFileSync(usersPath, JSON.stringify(users));

            return response.render('login', { 
                title: 'Login - Dev Solution',
                cssType: '/css/login.css',
                picture: '/image/login.png'
            });
    },
};

module.exports = authController;