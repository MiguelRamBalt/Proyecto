console.log('May Node be with you');

const express = require('express');
const app = express();

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/interfaz.html')
  })

  app.get('/peliculas/agregar/', function (req, res) {
    res.sendFile(__dirname + '/view/agregar.html')
  })

  app.get('/pelis.js', function (req, res) {
    res.sendFile(__dirname + '/model/pelis.js')
  })

  app.get('/estructura.js', function (req, res) {
    res.sendFile(__dirname + '/view/js/estructura.js')
  })

  app.get('/ajax.js', function (req, res) {
    res.sendFile(__dirname + '/view/js/ajax.js')
  })
app.listen(3000, function() {
    console.log('listening on 3000')
  })