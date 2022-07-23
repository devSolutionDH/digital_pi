const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');


const mainRoutes = require('./routes/main.routes');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'..','public')));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'algumSegredo'
}));

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);

app.listen(4000, () => console.log('Server start'));