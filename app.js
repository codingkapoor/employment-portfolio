var express = require('express');
var mongoose = require('mongoose');

var config = require('./config');
var seedDatabaseController = require('./controller/seedDatabaseController');
var employeeController = require('./controller/employeeController');

var port = process.env.PORT || 3000;

var app = express();

mongoose.connect(config.getDBConnectionStr());

seedDatabaseController(app);
employeeController(app);

app.listen(port);
