lib = require '../'

describe 'get cmd', ->
  it 'with no uri should return error', ->
    try
      stream = lib.get()
    catch err
      err.message.should.equal 'URL is Required'
