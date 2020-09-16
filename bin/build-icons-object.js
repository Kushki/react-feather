const path = require('path');
const cheerio = require('cheerio');
const minify = require('html-minifier').minify;

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents(svg) {
  const $ = cheerio.load(svg);
  $('svg').find('*').each((_i, item) => {
    $(item).removeAttr('stroke');
    $(item).removeAttr('stroke-width');
    $(item).removeAttr('stroke-linecap');
    $(item).removeAttr('stroke-linejoin');
  })
  return minify($('svg').html(), { collapseWhitespace: true });
}

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map((svgFile) => {
      const name = path.basename(svgFile, '.svg');
      const svg = getSvg(svgFile);
      const contents = getSvgContents(svg);
      return { name, contents };
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents;
      return icons;
    }, {});
}

module.exports = buildIconsObject;
