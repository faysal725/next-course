import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

// const DUMMY_POSTS = {
//   slug: "getting-started-with-nextjs",
//   title: "this is title",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   content:
//     "# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, doloribus modi! Dolore dicta illum obcaecati possimus explicabo quae cupiditate et!",
// };

export default function PostContent({post}) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
