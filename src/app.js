const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mainRouter = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', mainRouter)

app.listen(3030, function() {console.log('El servidor está corriendo en el puerto 3030')
console.log('http://localhost:3030/')});