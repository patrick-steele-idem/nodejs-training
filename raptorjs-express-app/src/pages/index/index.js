console.log('TEMPLATE PATH: ', require.resolve('./template.rhtml'));

var template = require('view-engine').load(require.resolve('./template.rhtml'));

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    template
        .stream({
            name: 'John',
            count: 0,
            colors: [
                'red',
                'green',
                'blue'
            ]
        })
        .pipe(res);
};