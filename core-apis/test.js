var ok = require('assert').ok;
var add = require('./assert').add;

ok(add(1, 2) === 3, 'Invalid result!');

var err = null;
try {
    add('test', 2);
} catch(e) {
    err = e;
}

ok(err !== null, 'Exception expected!');


console.log('All tests passed!');