'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.getPatientById = function getPatientById (req, res, next) {
  Default.getPatientById(req.swagger.params, res, next);
};
