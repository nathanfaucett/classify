var camelize = require("camelize"),
    singularize = require("singularize");


module.exports = classify;


function classify(string, locale) {
    return camelize(singularize(string, locale), false);
}
