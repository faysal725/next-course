import AllPosts from '@/components/posts/AllPosts'
import React from 'react'

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
  },

  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
  },

  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
  },
];


export default function AllPostPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}
