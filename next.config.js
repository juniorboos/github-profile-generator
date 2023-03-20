const removeImports = require("next-remove-imports");

module.exports = removeImports({})({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});
