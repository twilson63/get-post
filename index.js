(function() {
  var request;
  request = require('request');
  module.exports = {
    get: function() {
      if (!process.argv[2]) {
        return console.log('get [uri] - uri is required ex. http://twitter.com/search.json?q=nodejs');
      }
      if (!process.argv[2].match(/https?\:\/\/(.*)\.(.*)/)) {
        return console.log('get [uri] - uri is not valid');
      }
      return request({
        uri: process.argv[2],
        json: true
      }, function(err, resp, body) {
        return console.log(body);
      });
    },
    post: function() {
      var json;
      if (!process.argv[2]) {
        return console.log('post [uri] [json] - required!');
      }
      if (!process.argv[3]) {
        return console.log('post [*uri] [json] - required!');
      }
      json = JSON.stringify(JSON.parse(process.argv[3]));
      if (json == null) {
        return console.log('valid json required!');
      }
      return request.post({
        uri: process.argv[2],
        json: json
      }, function(err, resp, body) {
        return console.log(body);
      });
    }
  };
}).call(this);
