var app = require('express')();

port = process.env.PORT || 3000

app.post('/112', function (req, res) {
  res.status(201).json({"message": true});
});

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
