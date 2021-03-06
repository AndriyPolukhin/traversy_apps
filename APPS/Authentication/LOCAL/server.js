/**
* MODULE DEPENDENCIES
*/
const
  app = require('./app'),
  http = require('http');
//==============================================================================
/**
* CREATE SERVER VARIABLES
*/
const server = http.createServer(app);
//==============================================================================
/**
* MODULE VARIABLES
*/
//==============================================================================
const
  port = app.get('port'),
  env = app.get('env');
/**
* BIND SERVER TO PORT
*/
//==============================================================================
server.listen(port, function () {
  return console.log('Xpress server listening on port:' + port + ' in ' + env +
    ' mode');
});
//==============================================================================
