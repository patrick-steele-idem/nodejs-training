var request = require('request');
var async = require('async');



module.exports = function(req, res, next) {

    var apiVersion = req.params.apiVersion;

    var zip = req.params.zip || req.query.zip;

    if (!zip) {
        res.status(400);
        res.json({
            errorMessage: 'Zipcode is required'
        });
        return;
    }


    async.parallel([
        function(callback){
            request('http://api.sba.gov/geodata/city_data_for_state_of/CO.JSON', callback);
        },
        function(callback){
            request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip, callback);
        }
    ],
    // optional callback
    function(err, results) {
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
        var cityDataResults = results[0];
        var weatherServiceResults = results[1];

        var cityData = JSON.parse(cityDataResults[1]);
        var weatherData = JSON.parse(weatherServiceResults[1]);

        weatherData = weatherData.list[0].main;

        delete weatherData.humidity;


        var result = {
            apiVersion: apiVersion,
            weather: weatherData,
            cityData: cityData[0]
        };


        
        res.json(result);
        
    });

    

    // request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         var weather = JSON.parse(body);
    //         res.json(weather);
    //     } else {
    //         res.json({
    //             error: 'Something went wrong'
    //         });
    //         res.status(500);
    //     }
    // });

    // res.set('Content-Type', 'application/json; charset=utf-8');
    // res.end(JSON.stringify(weather, null, 4));

    
};