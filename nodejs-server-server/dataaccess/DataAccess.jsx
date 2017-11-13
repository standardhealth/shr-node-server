import HardCodedReadOnlyDataSource from './HardCodedReadOnlyDataSource';

export default class DataAccess {
    static DEMO_PATIENT_ID() {
        return "-1";
    };
    
    constructor(dataSourceName) {

        if (dataSourceName === 'HardCodedReadOnlyDataSource') {
            this.dataSource = new HardCodedReadOnlyDataSource();
        // } else if (dataSourceName === 'RestApiDataSource') {
        //     this.dataSource = new RestApiDataSource();
        } else {
            throw new Error("Unrecognized data source class name: " + dataSourceName);
        }
    }
    
    getPatient(id) {
        return this.dataSource.getPatient(id);
    }
    
    getListOfPatients() {
        return this.dataSource.getListOfPatients();
    }
    
    newPatient() {
        return this.dataSource.newPatient();
    }
    
    savePatient(patient) {
        return this.dataSource.savePatient(patient);
    }
}