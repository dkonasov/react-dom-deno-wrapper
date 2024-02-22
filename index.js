const { renderToStaticMarkup:  renderToStaticMarkupBase } = require("react-dom/server");

/**
 * 
 * @param { import('react').ReactElement } element 
 * @returns { string }
 */
function renderToStaticMarkup(element) {
    return renderToStaticMarkupBase(element);
}

module.exports = {
    renderToStaticMarkup,
};