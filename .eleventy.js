module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static/css");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
}