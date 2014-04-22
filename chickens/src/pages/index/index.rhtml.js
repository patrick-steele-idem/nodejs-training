module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      raptor_optimizer_taglib_page_tag = require("raptor-optimizer-taglib/page-tag"),
      raptor_templates_taglibs_layout_UseTag = require("raptor-templates/taglibs/layout/UseTag"),
      raptor_templates_taglibs_layout_PutTag = require("raptor-templates/taglibs/layout/PutTag"),
      components_app_hello_renderer = require("../../components/app-hello/renderer"),
      components_app_simple_renderer = require("../../components/app-simple/renderer"),
      raptor_templates_taglibs_async_async_fragment_tag = require("raptor-templates/taglibs/async/async-fragment-tag"),
      forEach = __helpers.f,
      escapeXml = __helpers.x;

  return function render(data, context) {
    __helpers.t(context, 
      raptor_optimizer_taglib_page_tag,
      {
        "name": "index",
        "packagePath": "./optimizer.json",
        "dirname": __dirname
      });
    __helpers.t(context, 
      raptor_templates_taglibs_layout_UseTag,
      {
        "template": require.resolve("../../layouts/default-layout.rhtml")
      },
      function(_layout) {
        __helpers.t(context, 
          raptor_templates_taglibs_layout_PutTag,
          {
            "into": "title",
            "_layout": _layout
          },
          function() {
            context.w('Chickens!');
          });
        __helpers.t(context, 
          raptor_templates_taglibs_layout_PutTag,
          {
            "into": "body",
            "_layout": _layout
          },
          function() {
            context.w('<hr>');
            __helpers.t(context, 
              components_app_hello_renderer,
              {
                "name": "Frank"
              });
            __helpers.t(context, 
              components_app_simple_renderer,
              {
                "name": "John"
              });
            __helpers.t(context, 
              components_app_simple_renderer,
              {
                "name": "Jane"
              });
            __helpers.t(context, 
              components_app_simple_renderer,
              {
                "name": "Bob"
              });

            context.w('<hr> Available Chickens ');
            __helpers.t(context, 
              raptor_templates_taglibs_async_async_fragment_tag,
              {
                "dataProvider": "allChickens"
              },
              function(context,chickens) {
                context.w('<ul>');

                forEach(chickens.searchResults, function(chicken) {
                  context.w('<li>' +
                    escapeXml(chicken.type) +
                    ' - TEST</li>');
                });

                context.w('</ul>');
              });
          });
        __helpers.t(context, 
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