const assert = require('assert');
const User = require('../src/user');
const mongoose = require('mongoose');
// Describe block - a collection of test cases
// it - test case (function)
describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save()
    .then(() => {
      assert(!joe.isNew)
      done();
    })
  })
})

