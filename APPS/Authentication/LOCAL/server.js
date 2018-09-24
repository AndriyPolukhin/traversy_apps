/**
 * MODULE DEPENDENCIES
 */
const
  app = require('./app'),
  http = require('http');
//===========================================================
/**
 * CREATE SERVER INSTANCE
 */
const server = http.createServer(app);
//===========================================================
/**
 * MODULE VARIABLES
 */
const
  port = app.get('port'),
  env = app.get('env');
//===========================================================
/**
 * BIND SERVER TO PORT
 */
server.listen(port, () => {
  return console.log('Server listening on port: ' + port ' in ' + env + 'mode');
});
//===========================================================