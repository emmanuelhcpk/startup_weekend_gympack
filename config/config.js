var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gympack'
    },
    port: 3000,
    db: 'mongodb://localhost/gympack-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gympack'
    },
    port: 3000,
    db: 'mongodb://localhost/gympack-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'gympack'
    },
    port: 3000,
    db: 'mongodb://localhost/gympack-production'
  }
};

module.exports = config[env];
