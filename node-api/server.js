var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');
var config     = require("./config")
var mongoose = require("mongoose");

mongoose.connect(config.database);

// Express app will use body-parser to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('superSecreto',config.secret)
// Set port
var port = process.env.PORT || 3002;        // set the port

// Define a prefix for all routes
// Can define something unique like MyRestAPI
// We'll just leave it so all routes are relative to '/'
app.use('/', routes);
module.exports = app;
// Start server listening on port 8080
app.listen(port);
console.log('RESTAPI listening on port: ' + port);