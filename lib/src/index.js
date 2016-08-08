"use strict";
var express = require('express');
var config_1 = require('./config');
var app = express();
app.listen(config_1.default.port, function () {
    console.log('Example app listening on port 3000!');
    console.log('Server listening on %d', config_1.default.port);
});
//# sourceMappingURL=index.js.map