import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = `${process.env.mongodb_connection}/${process.env.mongodb_blog_database}`
    try {
        // connect to database 
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: "message stored successfully" });
  }
}

export default handler;
