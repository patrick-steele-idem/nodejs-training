var ok = require('assert').ok;

function add(a, b) {
    ok(typeof a === 'number', '"a" should be a number');
    ok(typeof b === 'number', '"b" should be a number');
    return a + b;
}

// console.log('Add result: ' + add('text', 2));

exports.add = add;