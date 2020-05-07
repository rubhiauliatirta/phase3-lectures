const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017";
const dbName = "student-service-db"
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology : true})

var db

function connect(callback){
  client.connect(function(err){
    if(err){
      console.log("connection to mongodb failed", err)
    }
    else {
      console.log("succesfully connect to mongodb")
      db = client.db(dbName)
    }
    callback(err)
  })
}

function getDatabase(){
  return db
}

module.exports = {
  connect, getDatabase
}