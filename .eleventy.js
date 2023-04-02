module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    addPassthroughCopy: true,
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
