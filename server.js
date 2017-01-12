var express = require('express'),
    bp = require('body-parser'),
    fs = require('fs'),
    path = require('path'),
    root = __dirname,
    port = process.env.PORT || 8080,
    app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());
require('./server/config/mysql.js');
require('./server/config/routes.js')(app);
var server = app.listen(port, function(){
  console.log(`server running on port ${ port }`);
});
