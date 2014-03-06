var Q = require('q');
var request = Q.denodeify(require('request'));


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

    var cityDataResults = null;

    request('http://api.sba.gov123123/geodata/city_data_for_state_of/CO.JSON')
        .then(function(_cityDataResults) {
            console.log('Response from first service came back!');
            cityDataResults = _cityDataResults;
            return request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip);
        })
        .fail(function(err) {
            cityDataResults = [{}, '{}'];
            return request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip);
        })
        .then(function(weatherServiceResults) {
            console.log('Both calls have completed!');

            var cityDataResponse = cityDataResults[0];
            var cityDataBody = cityDataResults[1];

            var weatherDataResponse = weatherServiceResults[0];
            var weatherDataBody = weatherServiceResults[1];

            var cityData = JSON.parse(cityDataBody);
            var weatherData = JSON.parse(weatherDataBody);

            weatherData = weatherData.list[0].main;

            delete weatherData.humidity;


            var result = {
                apiVersion: apiVersion,
                weather: weatherData,
                cityData: cityData[0]
            };

            res.json(result);
        })
        .fail(function(err) {
            console.log('Something went wrong! Error: ' + (err.stack || err));
            res.json({error: 'Something went wrong: ' + err});
            res.end();
        });
        
    // var promise1 = request('http://api.sba.gov/geodata/city_data_for_state_of/CO.JSON');
    // var promise2 = request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip);
    // Q.all([promise1, promise2].then(function(results) {
    //         var cityDataResults = results[0];
    //         var weatherServiceResults = results[1];


    //         var cityDataResponse = cityDataResults[0];
    //         var cityDataBody = cityDataResults[1];

    //         var weatherDataResponse = weatherServiceResults[0];
    //         var weatherDataBody = weatherServiceResults[1];

    //         if (cityDataResponse.statusCode !== 200 || weatherDataResponse.statusCode !== 200) {
    //             throw new Error('Request to remote service failed');
    //         }


    //         var cityData = JSON.parse(cityDataBody);
    //         var weatherData = JSON.parse(weatherDataBody);

    //         weatherData = weatherData.list[0].main;

    //         delete weatherData.humidity;


    //         var result = {
    //             apiVersion: apiVersion,
    //             weather: weatherData,
    //             cityData: cityData[0]
    //         };

    //         res.json(result);
    //     })
    //     .fail(function(err) {
    //         console.log('Something went wrong! Error: ' + (err.stack || err));
    //         res.json({error: 'Something went wrong: ' + err});
    //         res.end();
    //     });
};