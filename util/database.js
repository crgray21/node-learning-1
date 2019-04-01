const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://coryg:eaglesfan21@cluster0-dbyoo.mongodb.net/test?retryWrites=true";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then (client => {
      console.log("Connected to mongodb cluster!");
      callback(client); 
    })
    .catch (err => console.log(err));
};

module.exports = mongoConnect;


