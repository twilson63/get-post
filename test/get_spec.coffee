{ get } = require '../index'
describe 'GET CLI', ->
  it 'should show name', (done) ->
    # process.stdout.on "data", (chunked) ->
    #   chunked.should.eql("Hello World")
    #   done()
    get("Hello World")