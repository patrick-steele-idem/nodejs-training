module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      raptor_templates_taglibs_layout_PlaceholderTag = require("raptor-templates/taglibs/layout/PlaceholderTag"),
      raptor_optimizer_taglib_head_tag = require("raptor-optimizer-taglib/head-tag"),
      raptor_templates_taglibs_async_async_fragment_tag = require("raptor-templates/taglibs/async/async-fragment-tag"),
      escapeXml = __helpers.x,
      raptor_optimizer_taglib_body_tag = require("raptor-optimizer-taglib/body-tag"),
      raptor_widgets_taglib_init_widgets_tag = require("raptor-widgets/taglib/init-widgets-tag"),
      browser_refresh_lib_refresh_tag = require("browser-refresh/lib/refresh-tag");

  return function render(data, context) {
    context.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>');
    __helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "title",
        "content": data.layoutContent
      });

    context.w('</title>');
    __helpers.t(context, 
      raptor_optimizer_taglib_head_tag,
      {});

    context.w('</head><body><h1>');
    __helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "title",
        "content": data.layoutContent
      });

    context.w('</h1>');
    __helpers.t(context, 
      raptor_templates_taglibs_async_async_fragment_tag,
      {
        "dataProvider": "userProfile"
      },
      function(context,userProfile) {
        if (userProfile.isLoggedIn) {
          context.w('<div>Welcome back, ' +
            escapeXml(userProfile.name) +
            '!</div>');
        }
        else {
          context.w('<div><a href="#">Login</a></div>');
        }
      });

    context.w('<div class="body">');
    __helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "body",
        "content": data.layoutContent
      });

    context.w('</div><div class="sidebar">');
    __helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "sidebar",
        "content": data.layoutContent
      });

    context.w('</div>');
    __helpers.t(context, 
      raptor_optimizer_taglib_body_tag,
      {});
    __helpers.t(context, 
      raptor_widgets_taglib_init_widgets_tag,
      {});
    __helpers.t(context, 
      browser_refresh_lib_refresh_tag,
      {
        "enabled": true
      });

    context.w('</body></html>');
  };
}