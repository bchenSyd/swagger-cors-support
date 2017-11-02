'use strict';

var url = require('url');


var CreditCardPaymentsPSPNZD = require('./CreditCardPaymentsPSPNZDService');


module.exports.createPspNzdPspApplication = function createPspNzdPspApplication (req, res, next) {
  CreditCardPaymentsPSPNZD.createPspNzdPspApplication(req.swagger.params, res, next);
};

module.exports.getPspNzdApplication = function getPspNzdApplication (req, res, next) {
  CreditCardPaymentsPSPNZD.getPspNzdApplication(req.swagger.params, res, next);
};

module.exports.getPspNzdApplications = function getPspNzdApplications (req, res, next) {
  CreditCardPaymentsPSPNZD.getPspNzdApplications(req.swagger.params, res, next);
};

module.exports.updatePspNzdApplication = function updatePspNzdApplication (req, res, next) {
  CreditCardPaymentsPSPNZD.updatePspNzdApplication(req.swagger.params, res, next);
};

module.exports.updatePspNzdApplicationStatus = function updatePspNzdApplicationStatus (req, res, next) {
  CreditCardPaymentsPSPNZD.updatePspNzdApplicationStatus(req.swagger.params, res, next);
};
