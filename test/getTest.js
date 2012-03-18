var lib;

lib = require('../');

describe('get cmd', function() {
  return it('with no uri should return error', function() {
    var stream;
    try {
      return stream = lib.get();
    } catch (err) {
      return err.message.should.equal('URL is Required');
    }
  });
});
