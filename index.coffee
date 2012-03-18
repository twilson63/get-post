request = require 'request'

exports.get = (uri) ->
  return throw(new Error('URL is Required')) unless uri?
  request(uri, json: true)

exports.post = (uri) -> 
  return thow(new Error('URL is Required')) unless uri?
  request.post(uri, json: true)
