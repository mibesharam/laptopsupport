module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('styles');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('images');
  
    // Returning something from the configuration function is optional
    return {
      dir: {
        output: 'public'
      }
    };
  };

  