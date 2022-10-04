const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/e-comm";
const database = "e-comm";

const client = new MongoClient(url);

async function getData() {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("products");
    let response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.log("😥" + error);
  }
}

getData();
