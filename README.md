classify
=======

classify string, changes class to Class and some_class to SomeClass

```javascript
var classify = require("@nathanfaucett/classify");


classify("boxes") === "Box";
classify("skies") === "Sky";
classify("bike_riders") === "BikeRider";
classify("mega-big-sales") === "MegaBigSale";
```
