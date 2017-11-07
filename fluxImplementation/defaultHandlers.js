'use strict'
const hardCodedPatient = require('./HardCodedPatient.json');

const DEMO_PATIENT_ID = "-1"; 

/**
 * WARNING: If new node.js server code is generated using the swagger.yaml or swagger.json file, you will need to hand edit the
 * generated code. Code to add to controllers/DefaultService.js is:
 * 1. Import this file into the DefaultService.js file. (Ex: const patientHandler = require('../../fluxImplementation/defaultHandlers');)
 * 2. In each function, add the appropriate function from this file to execute the desired outcome, passing in 
 * all parameters. See each function for the appropriate line to add.
 */

// In DefaultService.js in getPatientById(), add: patientHandler.getPatientById(args, res, next);
function getPatientById(args, res, next) {
  if (args.shrId.value === DEMO_PATIENT_ID) {
    res.write(JSON.stringify(hardCodedPatient));
  } else {
    res.statusCode = 404;
    res.statusMessage = "Patient not found."
    res.write("No patient matched the specified ID.");
  }
}

module.exports = {
  getPatientById
};