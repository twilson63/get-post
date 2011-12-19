request = require 'request'
module.exports = ( ->
  # ANSI Terminal Colors
  BOLD = '\033[0;1m'
  GREEN = '\033[0;32m'
  RESET = '\033[0m'
  RED = '\033[0;31m'
  ORANGE = '\033[33;40m'
  
  VERSION = '0.1.0'

  HEADER = """
    ======================
    #{GREEN}Get-Post#{RESET} Version #{ORANGE}#{VERSION}#{RESET}
    ======================
  """
  GET_HELP = """
    command: #{GREEN}get#{RESET}
    params:
      #{ORANGE}uri = The Resource Endpoint you are trying to access. #{RESET}
  
    example:
      #{GREEN}get#{RESET} #{ORANGE}http://twitter.com/search.json?q=nodejs#{RESET}
  
  """
  GET_INVALID = """
    command: #{GREEN}get#{RESET}
    #{RED}Invalid URI:#{RESET} #{RED}Unable to reconize => #{RESET} 
  """

  POST_HELP = """
    command: #{GREEN}post#{RESET}
    params:
      #{ORANGE}uri = The Resource Endpoint you are trying to access. #{RESET}
  
    example:
      echo '{"HELLO":"WORLD"}' | #{GREEN}post#{RESET} #{ORANGE}http://echo-json.heroku.com#{RESET}
  
  """
  POST_INVALID = """
    command: #{GREEN}post#{RESET}
    #{RED}Invalid URI:#{RESET} #{RED}Unable to reconize => #{RESET} 
  """

  _parseJson = (json, cb) ->
    try
      cb null, JSON.stringify(json) 
    catch error
      console.log error
      cb(new Error("#{RED}Unable to parse JSON#{RESET}"), null)
  
  _post = (uri, json, cb) ->
    request.post { uri: uri, json: json }, cb
        
      
  {
    # ## get [uri]
    #
    # Description:
    #
    # performs a HTTP GET REQUEST on the uri passed as a parameter
    # with a content-type of application/json and returns the response
    # via stdout for piping.
    
    # Usage:
    #
    # { get } = require "get-post"
    # get "http://twitter.com/search.json?q=coffeescript", (err, data) -> 
    #   console.log data
    #
    #
    get: (uri, cb) ->
      unless uri?
        cb null, HEADER + GET_HELP
        return true
        
      unless /https?\:\/\/(.*)(\.|:)(.*)/.test uri
        cb null, HEADER + GET_INVALID + "#{ORANGE}#{uri}#{RESET}"
        return true
        
      request uri: uri, json: true, (err, resp, body) ->
        _parseJson body, (err, json) -> 
          if err?
            cb null, HEADER + err
          else
            cb null, json
            
    # # POST METHOD
    #
    # params
    #  uri: A HTTP Endpoint to post json data
    #  
    post: (uri, json_data, cb) ->
      unless uri?
        cb null, HEADER + POST_HELP
        return true
        
      unless /https?\:\/\/(.*)(\.|:)(.*)/.test uri
        cb null, HEADER + POST_INVALID + "#{ORANGE}#{uri}#{RESET}"
        return true

      _parseJson json_data, (err, json) ->
        if err?
          cb null, HEADER + err
        else
          _post uri, json, (err, status, body) -> cb null, body
          
  }
)()