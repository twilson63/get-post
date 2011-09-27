{ exec } = require 'child_process'

task 'build', ->
  exec 'coffee -c index.coffee', (err, stdout, stderr) ->
    console.log stderr.trim() if err
    console.log ':)' 
# task 'spec', ->
#   exec 'jasmine-node spec --coffee', (err, stdout, stderr) ->
#     console.log stdout.trim()
