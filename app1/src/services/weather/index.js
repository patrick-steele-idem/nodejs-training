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


    var promise1 = request('http://api.sba.gov/geodata/city_data_for_state_of/CO.JSON');
    var promise2 = request('http://api.openweathermap.org/data/2.5/find?mode=json&q=' + zip);

    Q.all([promise1, promise2])
        .then(function(results) {
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
};