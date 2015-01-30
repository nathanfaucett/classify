var camelize = require("camelize"),
    singularize = require("singularize");


module.exports = function classify(string, locale) {
    return camelize(singularize(string, locale), false);
};
