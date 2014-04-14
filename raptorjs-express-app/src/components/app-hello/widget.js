var $ = require('jquery');

function Widget(config) {
    var name = config.name;

    console.log(name);

    var $btnEl = this.$('#button');

    var self = this;

    $(this.el).click(function() {
        self.setName('World');
        $btnEl.css('background-color', 'yellow');
    });
}

Widget.prototype = {
    setName: function(name) {
        this.getEl('name').innerHTML = name;
    }
};

module.exports = Widget;