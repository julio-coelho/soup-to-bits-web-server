'use strict';

var request = require('request');

exports.get = function(callback) {
  request('http://localhost:8000', function(err, response, body) {
    callback(err, JSON.parse(body));
  });
};
