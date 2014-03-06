var $ = require('jquery');

function Widget(widgetConfig) {
    console.log('WIDGET INITIALIZED: ' + this.id);

    $(this.getEl()).click(function() {
        $(this).css('border', '5px solid pink');
    });


}

Widget.prototype = {

};

module.exports = Widget;