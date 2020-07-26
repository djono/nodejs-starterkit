"use strict";

var http = require('http');

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser'); //const mysql=require('mysql2');
//const ejs=require('ejs');


var port = 80;
var base_url = express["static"](path.join(__dirname, 'public'));
var app = express();
var mainMenu = {
  'Home': '/',
  'About': '/about',
  'Contact': '/contact'
};

var mainRoutes = require('./routes/mainRouter');

var adminRoutes = require('./routes/adminRouter');

var errorController = require('./routes/error');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(base_url);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('menu', mainMenu);
app.use(mainRoutes);
app.use(adminRoutes);
app.use(errorController.get404);
var server = http.createServer(app);
server.listen(port);
//# sourceMappingURL=app.dev.js.map
