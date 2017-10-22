var express = require('express');
var app = express();
var http = require('http');
var personRouter = require('./routes/person');
var cors = require('cors');
var port = process.env.PORT || 5000;



app.listen(port, function () {
  	console.log('Example app listening on port 5000!');
});
app.use(cors());
app.use('/', personRouter);

app.use(function(req, res, next) {
    res.status(404);
    res.end('404: Resouces Not Found');
});




