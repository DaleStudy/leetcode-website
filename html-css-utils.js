/**
 * Processes a template literal to combine strings and interpolated values into a single HTML string.
 *
 * @param {TemplateStringsArray} strings - An array of string literals.
 * @param {...string} values - Interpolated values within the template literal.
 * @returns {string} The combined HTML string.
 */
export function html(strings, ...values) {
  let htmlString = strings[0];

  for (let i = 0; i < values.length; i++) {
    htmlString += values[i] + strings[i + 1];
  }

  return htmlString;
}

/**
 * Processes a template literal to combine strings and interpolated values into a single CSS string.
 *
 * @param {TemplateStringsArray} strings - An array of string literals.
 * @param {...string} values - Interpolated values within the template literal.
 * @returns {string} The combined CSS string.
 */
export function css(strings, ...values) {
  const GlobalCSS = `<link rel="stylesheet" href="./global-styles.css" />`;

  return html`
    ${GlobalCSS}
    <style>
      ${html(strings, ...values)}
    </style>
  `;
}
