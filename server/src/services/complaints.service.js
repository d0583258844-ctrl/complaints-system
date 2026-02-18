import { getMongoConn } from "../db/connect.js";
const db = await getMongoConn();
const complaintsCollection = db.collection("complaints");

export async function createComplaint(complaint) {
  complaint.createdAt = new Date();  
  const result = await complaintsCollection.insertOne(complaint);
  complaint._id = result.insertedId;
  return complaint;
}

export async function getAllComplaints() {
  const db = complaintsCollection.find({}).toArray()
  return db
}
