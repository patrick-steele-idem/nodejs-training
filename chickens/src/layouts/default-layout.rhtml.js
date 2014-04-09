module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      raptor_templates_taglibs_layout_PlaceholderTag = require("raptor-templates/taglibs/layout/PlaceholderTag"),
      raptor_optimizer_taglib_head_tag = require("raptor-optimizer-taglib/head-tag"),
      raptor_optimizer_taglib_body_tag = require("raptor-optimizer-taglib/body-tag"),
      browser_refresh_lib_refresh_tag = require("browser-refresh/lib/refresh-tag");

  return function render(data, context) {
    context.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>');
    helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "title",
        "content": data.layoutContent
      });

    context.w('</title>');
    helpers.t(context, 
      raptor_optimizer_taglib_head_tag,
      {});

    context.w('</head><body><h1>');
    helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "title",
        "content": data.layoutContent
      });

    context.w('</h1><div class="body">');
    helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "body",
        "content": data.layoutContent
      });

    context.w('</div><div class="sidebar">');
    helpers.t(context, 
      raptor_templates_taglibs_layout_PlaceholderTag,
      {
        "name": "sidebar",
        "content": data.layoutContent
      });

    context.w('</div>');
    helpers.t(context, 
      raptor_optimizer_taglib_body_tag,
      {});
    helpers.t(context, 
      browser_refresh_lib_refresh_tag,
      {
        "enabled": true
      });

    context.w('</body></html>');
  };
}