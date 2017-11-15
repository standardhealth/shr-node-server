import HardCodedReadOnlyDataSource from './HardCodedReadOnlyDataSource';
import MongoDataSource from './MongoDataSource';

export default class DataAccess {
    static DEMO_PATIENT_ID() {
        return "788dcbc3-ed18-470c-89ef-35ff91854c7d";
    };
    
    constructor(dataSourceName) {

        if (dataSourceName === 'HardCodedReadOnlyDataSource') {
            this.dataSource = new HardCodedReadOnlyDataSource();
        // } else if (dataSourceName === 'RestApiDataSource') {
        //     this.dataSource = new RestApiDataSource();
        } else if(dataSourceName === 'MongoDataSource'){
            this.dataSource = new MongoDataSource();
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