/**
 * MAIN FILE FOR THE SERVER
 */
'use strict';
/**
 * MODULE DEPENDENCIES
 */
const
  app = require('./app'),
  http = require('http');
//=======================================================
/**
 * SERVER INSTANCE
 */
const server = http.createServer(app);
//=======================================================
/**
 * MODULE VARIABLES
 */
const
  port = app.get('port'),
  env = app.get('env');
//=======================================================
/**
 * BIND TO PORT
 */
server.listen(port, () => {
  return console.log('Server listening on port ' + port + ' in ' + env + 'mode');
});
//=======================================================
/**
 * CONDITIONALY EXPORT MODULE
 */
if (require.main != module) {
  module.exports = server;
}
//=======================================================