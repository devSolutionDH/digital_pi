const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./routes/main.routes');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);

app.listen(4000, () => console.log('Server start'));