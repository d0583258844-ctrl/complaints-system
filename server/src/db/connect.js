import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = "complaints";

let client;

export async function connectToMongo() {
  try {
    client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Connected To mongodb");
    return client
  } catch (err) {
    console.log(err);
  }
}

export async function getMongoConn(){
  if(!client)client = await connectToMongo();
  return client.db(DB_NAME);
}