const mongoose = require('mongoose');

before((done) => {
  mongoose.connect('mongodb://localhost/test_user');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });

})

// hook beforeEach - run before each test case
beforeEach(() => {
  mongoose.connection.collections.users.drop(() => {
    // 1.ready to run the next test
    // 2. done() - signal to mocha that the drop is done
    done();
  });
})


  