request = require 'request'
module.exports =
  get: ->
    return console.log 'get [uri] - uri is required ex. http://twitter.com/search.json&q=nodejs' unless process.argv[2]
    return console.log 'get [uri] - uri is not valid' unless process.argv[2].match /https?\:\/\/(.*)\.(.*)/
    request uri: process.argv[2], json: true, (err, resp, body) ->
      #console.log JSON.stringify(body)
      console.log body
  post: ->
    return console.log 'post [uri] [json] - required!' unless process.argv[2]
    return console.log 'post [*uri] [json] - required!' unless process.argv[3]
    json = JSON.stringify(JSON.parse(process.argv[3]))
    return console.log 'valid json required!' unless json? 
    request.post uri: process.argv[2], json: json, (err, resp, body) ->
      console.log body