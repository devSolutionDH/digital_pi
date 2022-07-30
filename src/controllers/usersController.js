const usersController = {

    profileScreen: (request, response) => {
        response.render('profile', { 
            title: "Perfil - Dev Solution",
            cssType: "/css/profile.css",
            picture:"/image/Editada para perfil finclass (2).jpg"
        });
    },

    dashboardScreen: (request, response) => {
        response.render("dashboard", { 
            title: "Filas - Dev Solution",
            cssType: "/css/dashboard.css",
            picture: "/image/shadow-car.jpg",
            desc: "Sombra de um carro ", 
            value: "0,00",
            places: 0,
            km: "0"
        });
    },

    carScreen: (request, response) => {
        
         const car = request.body.car;
         const desc = "Foto do carro ";
         const value = "1555,00";
         const places = 2;
         const km = "10 000";

        response.render("dashboard", {
            title: "Filas - Dev Solution",
            cssType: "/css/dashboard.css",
            picture: "/image/" + car + ".jpg",
            desc: desc + car,
            value: value,
            places: places,
            km: km
        });
    },
};

module.exports = usersController;