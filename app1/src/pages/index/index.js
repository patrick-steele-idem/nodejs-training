module.exports = function(req, res, next) {
    res.write('Hello World!');
    res.end();
};