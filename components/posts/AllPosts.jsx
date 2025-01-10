import React from 'react'
import classes from './all-posts.module.css'
import PostsGrid from './PostsGrid'

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>AllPosts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}
