var assert = require("assert"),
    inflections = require("inflections"),
    classify = require("../src/index");


describe("classify(string : String[, locale : String])", function() {
    it("should classify string", function() {
        var en = inflections("en");

        en.singular(/s$/i, "");
        en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
        en.singular(/([^aeiouy])ies$/i, "$1y");

        assert.equal(classify("boxes"), "Box");
        assert.equal(classify("skies"), "Sky");
        assert.equal(classify("bike_riders"), "BikeRider");
        assert.equal(classify("mega-big-sales"), "MegaBigSale");
    });
});
