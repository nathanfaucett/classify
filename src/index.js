var camelize = require("@nathanfaucett/camelize"),
    singularize = require("@nathanfaucett/singularize");


module.exports = classify;


function classify(string, locale) {
    return camelize(singularize(string, locale), false);
}
