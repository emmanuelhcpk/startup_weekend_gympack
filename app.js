

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob')
  mongoose = require('mongoose');
var  five = require('johnny-five');
var io = require('socket.io');
var EventEmitter = require('events');
//var cmds = new EventEmitter().EventEmitter
//io.on('connection', function(socket) {
//  console.log('Se conectó ${socket.id}')
//
//  socket.on('led:on', function() {
//    cmds.emit('led:on')
//  })
//
//  socket.on('led:off', function(){
//    cmds.emit('led:off')
//  })
//
//  cmds.on('temperature', function(temperature){
//    socket.emit('temperature', temperature)
//  })
//});
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

