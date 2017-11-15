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

