function Widget(cfg) {
    var self = this;
    this.$buttonEl = this.$();

    this.$buttonEl.click(function() {
        self.publish('click', {
            source: self
        });
    });
}

Widget.prototype = {
    disable: function() {
        this.$buttonEl.attr("disabled", "disabled");
    },
    enable: function() {
        this.$buttonEl.removeAttr("disabled");
    },

    setLabel: function(label) {
        this.el.innerHTML = label;
    }
};

module.exports = Widget;