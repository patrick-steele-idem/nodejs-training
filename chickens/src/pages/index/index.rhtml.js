module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      raptor_optimizer_taglib_page_tag = require("raptor-optimizer-taglib/page-tag"),
      raptor_templates_taglibs_layout_UseTag = require("raptor-templates/taglibs/layout/UseTag"),
      raptor_templates_taglibs_layout_PutTag = require("raptor-templates/taglibs/layout/PutTag"),
      forEach = helpers.f,
      escapeXml = helpers.x;

  return function render(data, context) {
    helpers.t(context, 
      raptor_optimizer_taglib_page_tag,
      {
        "name": "index",
        "packagePath": "./optimizer.json",
        "dirname": __dirname
      });
    helpers.t(context, 
      raptor_templates_taglibs_layout_UseTag,
      {
        "template": require.resolve("../../layouts/default-layout.rhtml")
      },
      function(_layout) {
        helpers.t(context, 
          raptor_templates_taglibs_layout_PutTag,
          {
            "into": "title",
            "_layout": _layout
          },
          function() {
            context.w('Chickens!');
          });
        helpers.t(context, 
          raptor_templates_taglibs_layout_PutTag,
          {
            "into": "body",
            "_layout": _layout
          },
          function() {
            context.w('Available Chickens <ul>');

            forEach(data.chickens.searchResults, function(chicken) {
              context.w('<li>' +
                escapeXml(chicken.type) +
                '</li>');
            });

            context.w('</ul>');
          });
        helpers.t(context, 
          raptor_templates_taglibs_layout_PutTag,
          {
            "into": "sidebar",
            "_layout": _layout
          },
          function() {
            context.w('Act Fast!');
          });
      });
  };
}