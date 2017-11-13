'use strict'

/**
 * WARNING: If new node.js server code is generated using the swagger.yaml or swagger.json file, you will need to hand edit the
 * generated code. Code to add to controllers/DefaultService.js is:
 * 1. Import this file into the DefaultService.js file. (Ex: const patientHandler = require('../../fluxImplementation/defaultHandlers');)
 * 2. In each function, add the appropriate function from this file to execute the desired outcome, passing in
 * all parameters. See each function for the appropriate line to add.
 */
import DataAccess from '../dataaccess/DataAccess';
import Lang from 'lodash';

// In DefaultService.js in getPatientById(), add: patientHandler.getPatientById(args, res, next);
function getPatientById(args, res, next) {

    const da = new DataAccess('HardCodedReadOnlyDataSource');
    const hardCodedPatient = da.getPatient(args.shrId.value);

    if(!Lang.isUndefined(hardCodedPatient && !Lang.isNull(hardCodedPatient))) {
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