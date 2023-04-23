const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const bundlerPlugin = require('@11ty/eleventy-plugin-bundle');
const pluginRSS = require('@11ty/eleventy-plugin-rss');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    './node_modules/normalize.css/normalize.css': '/css/normalize.css',
    'content/**/*.{mp3}': '/assets/'
  });

  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg,css,js,mp3}');

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(bundlerPlugin);
  eleventyConfig.addPlugin(pluginRSS);

  return {
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid',
    ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "content",          // default: "."
      includes: "../_includes",  // default: "_includes"
      data: "../_data",          // default: "_data"
      output: "_site"
    },
    pathPrefix: '/'
  };
};
