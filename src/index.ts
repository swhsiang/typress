import express = require('express');

const app = express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    console.log('Server listening on %d', 3000);
});