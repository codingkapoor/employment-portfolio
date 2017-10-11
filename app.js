// TODO: Implement authentication and authorization.
var express = require('express');
var mongoose = require('mongoose');

// TODO: Configure encrypted password for database connection.
var config = require('./config');

var seedDatabaseController = require('./controller/seedDatabaseController');
var employeeController = require('./controller/employeeController');

// TODO: See how to configure environment variables.
var port = process.env.PORT || 3000;

var app = express();

mongoose.connect(config.getDBConnectionStr());

seedDatabaseController(app);
employeeController(app);

app.listen(port);
