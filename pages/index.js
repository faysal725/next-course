import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [FeedbackItems, setFeedbackItems] = useState([]);

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    console.log(enteredEmail, enteredFeedback);
    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbackItems(data.feedback));
  }
  return (
    <div className="">
      <h1>the home page</h1>

      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback address</label>
          <textarea type="text" id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>

      <ul>
        {FeedbackItems.map((item) => (
          <li key={item.email}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
}
