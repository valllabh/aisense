module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  eleventyConfig.addFilter("slug", function (str) {
    return str.replace(/\s+/g, "-").toLowerCase();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/aisense/",
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
};
