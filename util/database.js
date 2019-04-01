const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const url = "mongodb+srv://coryg:eaglesfan21@cluster0-dbyoo.mongodb.net/shop?retryWrites=true";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then (client => {
      console.log("Connected to mongodb cluster!");
      _db = client.db();
      callback(client); 
    })
    .catch (err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database connection!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


