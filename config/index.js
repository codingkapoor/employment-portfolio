var creds = require('./creds');

module.exports = {
  getDBConnectionStr: function() {
    return 'mongodb://' + creds.username + ':' + creds.password + '@ds113925.mlab.com:13925/employment_portfolio';
  }
}
