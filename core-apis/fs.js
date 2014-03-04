var fs = require('fs');
var path = require('path');

console.log('dirname: ', __dirname);
console.log('filename: ', __filename);

var filePath = path.join(__dirname, '../core-apis/hello.txt');
console.log('hello.txt path: ',
        filePath + '\n' +
        'dir: ', path.dirname(filePath) + '\n' +
        'basename: ', path.basename(filePath) + '\n' +
        'ext: ', path.extname(filePath));

var helloTxt = fs.readFileSync(filePath, {encoding: 'utf8'});
console.log('File content: ' + (typeof helloTxt), helloTxt);
// fs.readFile('hello.txt', {}, function(err, data) {
//     if (err) {
//         console.log('Something with wrong! ' + err);
//         process.exit(1);
//         return;
//     }

//     data = data.toString('utf8');
//     console.log('File content: ' + (typeof data), data);
// });

var subdir = path.join(__dirname, 'subdir');

fs.readdir(subdir, function(err, data) {
    for (var i=0; i<data.length; i++) {
        var child = data[i];
        child = path.join(subdir, child);
        console.log('Child file: ' + child);
    }
    console.log('Dir files: ', data);
});

fs.writeFile(filePath, 'NEW TEXT 2', {encoding: 'utf8'}, function(err) {
    console.log('Successfully wrote to "' + filePath + '"');
});

