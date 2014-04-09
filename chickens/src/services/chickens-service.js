exports.getAllChickens = function(callback) {
    callback(null, {
        searchResults: [
            {
                type: 'Silkie',
                color: 'white',
                available: 100
            },
            {
                type: 'Ancona',
                color: 'black',
                available: 30
            }
        ]
    });
};