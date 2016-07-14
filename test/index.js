var tape = require("tape"),
    inflections = require("@nathanfaucett/inflections"),
    classify = require("..");


tape("classify(string : String[, locale : String])", function(assert) {
    var en = inflections("en");

    en.singular(/s$/i, "");
    en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
    en.singular(/([^aeiouy])ies$/i, "$1y");

    assert.equal(classify("boxes"), "Box");
    assert.equal(classify("skies"), "Sky");
    assert.equal(classify("bike_riders"), "BikeRider");
    assert.equal(classify("mega-big-sales"), "MegaBigSale");

    assert.end();
});
