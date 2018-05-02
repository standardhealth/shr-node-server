'use strict';
const patientHandler = require('../../fluxImplementation/defaultHandlers');

exports.getPatientById = function(args, res, next) {
  /**
   * Find patient by SHR ID
   * Returns a single patient record
   *
   * shrId String ID of patient to return
   * no response value expected for this operation
   **/
  patientHandler.getPatientById(args, res, next);
}

exports.patientOPTIONS = function(args, res, next) {
  /**
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.updatePatientRecord = function(args, res, next) {
  /**
   * Update a single patient record
   * Updates a single patient record
   *
   * patient List Patient object to update
   * no response value expected for this operation
   **/
  patientHandler.updatePatient(args, res, next);
}

