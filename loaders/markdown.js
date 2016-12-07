"use strict";

var MarkdownIt = require("markdown-it");
var MarkdownItAttrs = require("markdown-it-attrs");
var md = new MarkdownIt({ html: true });
md.use(MarkdownItAttrs);

module.exports = function (markdown) {
  this.cacheable();
  return md.render(markdown);
};
