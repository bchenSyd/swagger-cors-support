'use strict';

var url = require('url');


var TermsAndConditionsPSPNZD = require('./TermsAndConditionsPSPNZDService');


module.exports.getPspNzdTerms = function getPspNzdTerms (req, res, next) {
  TermsAndConditionsPSPNZD.getPspNzdTerms(req.swagger.params, res, next);
};

module.exports.getPspNzdTermsVersion = function getPspNzdTermsVersion (req, res, next) {
  TermsAndConditionsPSPNZD.getPspNzdTermsVersion(req.swagger.params, res, next);
};
