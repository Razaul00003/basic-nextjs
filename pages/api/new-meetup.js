import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://nextJsdbuser:nextdbPass@cluster0.wsakd.mongodb.net/nextjs1?retryWrites=true&w=majority"
    );
    const db = client.db;
    const meetupsCollection = db.collection("meetup");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "info submitted" });
  }
}
export default handler;
