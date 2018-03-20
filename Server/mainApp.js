const express = require('express');

var app = express();


app.get('/', (req, res) => {
    var jsonFile = require('./taj1.json')
    res.json(jsonFile);
})


app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });