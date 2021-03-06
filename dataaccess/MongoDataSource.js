// There is only JSON all through the server side, no PatientRecord objects.
// relies on npm install mongodb 
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
import DataAccess from '../dataaccess/DataAccess';
import IDataSource from '../dataaccess/IDataSource';
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'flux';
    
export default class MongoDataSource extends IDataSource {
    
    getPatient(id){
        if (id === DataAccess.DEMO_PATIENT_ID()) {

            var result = null;
            var database;
            var dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
            return dbPromise.then(function(database) {
                var collection = database.collection('entries');
                var result = collection.find({ShrId: id}).toArray();
                return result.then(function(result2) {
                    result2.forEach(entry => {
                        delete entry._id; // don't send Mongo id
                    });
                    return result2;
                });
            }, function(err) {
              console.log(err); 
              return null;
            });

        } else {
            console.error("loading of patients other than the hard-coded demo patient is not implemented in Mongo data source. Patient = " + id);
            return null;
        }
    }
    
    getListOfPatients() {
        console.log("getting a list of patients is not implemented yet in MongoDB data source.");
    }
    
    newPatient() {
        console.log("creating new patients is not implemented yet in MongoDB data source.");
    }
    
    savePatient(entries) {
        var id = null;
        if (entries.length > 0) {
            id = entries[0].ShrId;
        }
        var database;
        var dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
        return dbPromise.then(function(database) {
            var collection = database.collection('entries');
            for (const entry of entries) {
                collection.updateOne(
                    { ShrId: id, EntryId: entry.EntryId },
                    { $set: entry },
                    { upsert: true }
                );
            }
            return 'Successfully saved patient data';
        }).catch(function(err) {
            return err;
        });
    }
    
}