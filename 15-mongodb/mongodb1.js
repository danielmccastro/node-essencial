/* let MongoClient = require("mongodb").MongoClient;
let mongoServer = "mongodb://localhost:27017/";

MongoClient.connect(mongoServer, function (err, cliente) {
    if (err) return callback(err);
    let db = cliente.db("livro");
    let carros = db.collection("carros");
    carros.find({}).toArray(function (error, results) {
        for (let carro of results) {
            console.log(carro);
        }
    })
}) */

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "livro";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("carros");

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
