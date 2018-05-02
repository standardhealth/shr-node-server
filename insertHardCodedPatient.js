// Inserts the HardCodedPatient.json into MongoDB
var MongoClient = require('mongodb').MongoClient;
var HardCodedPatient = require('./dataaccess/HardCodedPatient.json');
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'flux';
  
var result = null;
var database;
var dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
dbPromise.then(function(database) {
    var collection = database.collection('entries');
    // Remove any existing SHR entries for the demo patient
    var dropResult = collection.deleteMany({ShrId: {$eq: "788dcbc3-ed18-470c-89ef-35ff91854c7d"}});
    dropResult.then(function(result) {
        console.log(result.deletedCount + " existing SHR entries removed");
    });
    // Insert the up to date SHR entries for the demo patient
    var insertResult = collection.insertMany(HardCodedPatient);
    insertResult.then(function(result) {
        console.log(result.insertedCount + " up-to-date SHR entries inserted.");
        process.exit();
    });
}, function(err) {
  console.log(err);
  process.exit();
});

