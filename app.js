var express = require('express');
var mongoose = require('mongoose');

var config = require('./config');
var seedDBController = require('./controller/seedDBController');

var port = process.env.PORT || 3000;

var app = express();

mongoose.connect(config.getDBConnectionStr());

seedDBController(app);

app.listen(port);
