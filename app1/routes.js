exports.addRoutes = function(app) {
    app.get('/', require('./src/pages/index'));
    app.get('/test', require('./src/pages/test')); 
};