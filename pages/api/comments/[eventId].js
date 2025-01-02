import { MongoClient } from "mongodb";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "@/helpers/db-utils";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Database connection failed" });
    return;
  }

  if (req.method === "POST") {
    // add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });

      client.close();
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };
    console.log(newComment);

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res
        .status(201)
        .json({ message: "comment added successfully", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment   failed" });
    }

    // const result = await db.collection("comments").insertOne(newComment);
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get all Items" });
    }
  }

  client.close();
}
