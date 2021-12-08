module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("randomPost", function (arr) {
    arr.sort(() => {
      return 0.5 - Math.random();
    });

    return arr.slice(0, 1);
  });

  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPassthroughCopy("src/styles");
  return {
    addPassthroughCopy: true,
    dir: {
      input: "src",
      output: "public",
    },
  };
};
