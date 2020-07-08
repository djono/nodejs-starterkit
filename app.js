const http=require('http');
const express=require('express');
const bodyparser=require('body-parser');
const mysql=require('mysql2');
const ejs=require('ejs');

const app=express();

const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/admin');
const errorController = require('./routes/error');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoutes);
app.use('/backend',adminRoutes.handler);

app.use(errorController.get404);

const server=http.createServer(app);

server.listen(3000);