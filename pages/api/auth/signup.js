import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res
        .status(422)
        .json({
          message:
            "invalid input - password should also be at least 7 char long",
        });
      return;
    }
    const client = await connectToDatabase();
    const db = client.db();
    const hashedPassword = await hashPassword(password);

    const result = await db.collection("auth").insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User is created" });
  }
}
