'use strict';

var url = require('url');


var AccountService = require('./AccountService');


module.exports.login = function login(req, res, next) {
  AccountService.login(req.swagger.params, res, next);
};

