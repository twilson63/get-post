(function() {
  var request;

  request = require('request');

  module.exports = (function() {
    var BOLD, GET_HELP, GET_INVALID, GREEN, HEADER, ORANGE, POST_HELP, POST_INVALID, RED, RESET, VERSION, _parseJson, _post;
    BOLD = '\033[0;1m';
    GREEN = '\033[0;32m';
    RESET = '\033[0m';
    RED = '\033[0;31m';
    ORANGE = '\033[33;40m';
    VERSION = '0.1.0';
    HEADER = "======================\n" + GREEN + "Get-Post" + RESET + " Version " + ORANGE + VERSION + RESET + "\n======================";
    GET_HELP = "  command: " + GREEN + "get" + RESET + "\n  params:\n    " + ORANGE + "uri = The Resource Endpoint you are trying to access. " + RESET + "\n\n  example:\n    " + GREEN + "get" + RESET + " " + ORANGE + "http://twitter.com/search.json?q=nodejs" + RESET + "\n";
    GET_INVALID = "command: " + GREEN + "get" + RESET + "\n" + RED + "Invalid URI:" + RESET + " " + RED + "Unable to reconize => " + RESET + " ";
    POST_HELP = "  command: " + GREEN + "post" + RESET + "\n  params:\n    " + ORANGE + "uri = The Resource Endpoint you are trying to access. " + RESET + "\n\n  example:\n    echo '{\"HELLO\":\"WORLD\"}' | " + GREEN + "post" + RESET + " " + ORANGE + "http://echo-json.heroku.com" + RESET + "\n";
    POST_INVALID = "command: " + GREEN + "post" + RESET + "\n" + RED + "Invalid URI:" + RESET + " " + RED + "Unable to reconize => " + RESET + " ";
    _parseJson = function(json, cb) {
      try {
        return cb(null, JSON.stringify(json));
      } catch (error) {
        console.log(error);
        return cb(new Error("" + RED + "Unable to parse JSON" + RESET), null);
      }
    };
    _post = function(uri, json, cb) {
      return request.post({
        uri: uri,
        json: json
      }, cb);
    };
    return {
      get: function(uri, cb) {
        if (uri == null) {
          cb(null, HEADER + GET_HELP);
          return true;
        }
        if (!/https?\:\/\/(.*)(\.|:)(.*)/.test(uri)) {
          cb(null, HEADER + GET_INVALID + ("" + ORANGE + uri + RESET));
          return true;
        }
        return request({
          uri: uri,
          json: true
        }, function(err, resp, body) {
          return _parseJson(body, function(err, json) {
            if (err != null) {
              return cb(null, HEADER + err);
            } else {
              return cb(null, json);
            }
          });
        });
      },
      post: function(uri, json_data, cb) {
        if (uri == null) {
          cb(null, HEADER + POST_HELP);
          return true;
        }
        if (!/https?\:\/\/(.*)(\.|:)(.*)/.test(uri)) {
          cb(null, HEADER + POST_INVALID + ("" + ORANGE + uri + RESET));
          return true;
        }
        return _parseJson(json_data, function(err, json) {
          if (err != null) {
            return cb(null, HEADER + err);
          } else {
            return _post(uri, json, function(err, status, body) {
              return cb(null, body);
            });
          }
        });
      }
    };
  })();

}).call(this);
