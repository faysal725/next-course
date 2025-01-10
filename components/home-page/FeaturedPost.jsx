import React from "react";
import classes from "./FeaturedPost.module.css";
import PostsGrid from "../posts/PostsGrid";

export default function FeaturedPost(props) {
  return <section className={classes.latest}>
    <h2>FeaturedPost</h2>
    <PostsGrid posts={props.posts}/>
  </section>;
}
