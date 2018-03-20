const express = require('express');

var app = express();


app.get('/', (req, res) => {
    var jsonFile = require('./taj2.json')
    res.json(jsonFile);
})


app.listen(4000, () => {
    console.log('Server is up on port 4000');
  });