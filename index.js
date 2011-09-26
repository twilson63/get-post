(function() {
  var request;
  request = require('request');
  module.exports = {
    get: function() {
      return request(process.argv[2], function(err, resp, body) {
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
