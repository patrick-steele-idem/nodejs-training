exports.addRoutes = function(app) {
    // Services:
    app.use('/services', require('./src/services'));

    // Pages:
    app.get('/test', require('./src/pages/test')); 
    app.get('/', require('./src/pages/index'));
};