var get;

get = require('../index').get;

describe('GET CLI', function() {
  return it('should show name', function(done) {
    return get("Hello World");
  });
});
