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
    var result = collection.insertMany(HardCodedPatient);
    result.then(function(result) {
        console.log(result.insertedCount + " items inserted.");
    });
}, function(err) {
  console.log(err); 
});

