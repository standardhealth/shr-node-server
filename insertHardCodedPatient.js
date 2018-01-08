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
    database.collection('entries').drop(function(err, reply){
        // Ignore error when dropping a database that doesn't exist
    });
    var collection = database.collection('entries');
    var result = collection.insertMany(HardCodedPatient);
    result.then(function(result) {
        console.log(result.insertedCount + " items inserted.");
        process.exit();
    });
}, function(err) {
  console.log(err);
  process.exit();
});

