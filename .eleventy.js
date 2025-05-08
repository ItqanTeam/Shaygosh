module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("blog", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/blog/*.md");
    });
  
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return new Date(dateObj).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    });

  eleventyConfig.addPassthroughCopy("src/admin");

  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      htmlTemplateEngine: "njk"
    };
  };
  