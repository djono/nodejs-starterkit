const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
//const mysql=require('mysql2');
//const ejs=require('ejs');
const port=80;
const base_url=express.static(path.join(__dirname,'public'));
const app=express();
const mainMenu={'Home':'/','About':'/about','Contact':'/contact'};

const mainRoutes = require('./routes/mainRouter');
const adminRoutes = require('./routes/adminRouter');
const errorController = require('./routes/error');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(base_url);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('menu',mainMenu);
app.use(mainRoutes);
app.use(adminRoutes);


app.use(errorController.get404);

const server=http.createServer(app);

server.listen(port);