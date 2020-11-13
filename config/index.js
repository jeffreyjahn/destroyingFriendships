var convict = require('convict');
 
convict.addFormat(require('convict-format-with-validator').ipaddress);
 
// Define a schema
var config = convict({
  env: {
    doc: 'The application environment.',
    format: ['prod', 'dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: 'localhost',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port'
  },
  postgres: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'IP_ADDRESS'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users',
      env: 'PG_NAME'
    },
    port: {
      doc: 'Database port',
      format: 'int',
      default: 5432,
      env: 'PG_PORT'
    }
  }
});
 
// Load environment dependent configuration
var env = config.get('env');
config.loadFile('./config/' + env + '.json');
 
// Perform validation
config.validate({allowed: 'strict'});
 
module.exports = config;