var path = require('path');
var fs = require('fs');
var inFile = path.join(__dirname, 'hello.txt');
var outFile = path.join(__dirname, 'hello-copy.txt');
var through = require('through');

var chunkCount = 0;

var inStream = fs.createReadStream(inFile, {encoding: 'utf8'});
var outStream = fs.createWriteStream(outFile, {encoding: 'utf8'});

var upperCase = through(
    function(data) {
        this.queue(data.toUpperCase());
    });

inStream
    .pipe(upperCase)
    .pipe(outStream);