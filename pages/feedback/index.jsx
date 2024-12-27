import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch("/api/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.items);
      });
  }
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.email}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  let path = buildFeedbackPath();
  let data = extractFeedback(path);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
