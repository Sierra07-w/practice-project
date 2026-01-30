const { MongoClient } = require("mongodb");


const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "fittrack";

let db;

async function connectDB() {
if (!db) {
await client.connect();
db = client.db(dbName);
}
return db;
}


module.exports = connectDB;
