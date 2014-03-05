var express = require('express');
var app = express();

app.get('/:apiVersion/weather', require('./weather'));
app.get('/:apiVersion/weather/:zip', require('./weather'));

module.exports = app;