var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',
  port: 5000
});

server.start(function () {
    console.log('Server started at port ', server.port);
  });