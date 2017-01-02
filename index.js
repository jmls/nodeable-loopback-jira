const debug = require('debug')('loopback:connector:jira.index');
debug("loading jira connector");

module.exports = require('./lib/jira-connector');