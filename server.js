const express = require('express');
const app = express();
var path = require('path');


app.get('/', function(req, res) {
  app.use('/app', express.static(__dirname + '/app'));

  // bower deps
  app.use('/bower_components', express.static(__dirname + '/bower_components'));

  // client code
  app.use('/dist', express.static(__dirname + '/dist'));

  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, () => console.log('App listening on port 3000!'))
