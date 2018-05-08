'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.getPatientById = function getPatientById (req, res, next) {
  Default.getPatientById(req.swagger.params, res, next);
};

module.exports.patientOPTIONS = function patientOPTIONS (req, res, next) {
  Default.patientOPTIONS(req.swagger.params, res, next);
};

module.exports.updatePatientRecord = function updatePatientRecord (req, res, next) {
  Default.updatePatientRecord(req.swagger.params, res, next);
};
