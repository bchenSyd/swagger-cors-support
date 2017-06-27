'use strict';

exports.login = function (args, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    AccessToken: 'access_token'
  }, null, 2));

}

