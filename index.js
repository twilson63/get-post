var request;

request = require('request');

exports.get = function(uri) {
  if (uri == null) throw new Error('URL is Required');
  return request(uri, {
    json: true
  });
};

exports.post = function(uri) {
  if (uri == null) return thow(new Error('URL is Required'));
  return request.post(uri, {
    json: true
  });
};
