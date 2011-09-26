request = require 'request'
module.exports =
  get: ->
    request process.argv[2], (err, resp, body) ->
      console.log body
  post: ->
    return console.log 'post [uri] [json] - required!' unless process.argv[2]
    return console.log 'post [*uri] [json] - required!' unless process.argv[3]
    json = JSON.stringify(JSON.parse(process.argv[3]))
    return console.log 'valid json required!' unless json? 
    request.post uri: process.argv[2], json: json, (err, resp, body) ->
      console.log body