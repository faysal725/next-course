export default function handler(req, res) {
  const eventId = req.query.eventId;

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
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res
      .status(201)
      .json({ message: "comment added successfully", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Max",
        text: "asdf asdf asdf asdf asdf asdf asdasdf dof",
      },
      { id: "c2", name: "Prom", text: "asdf asdf asdf asdf asdf asdf as" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}
