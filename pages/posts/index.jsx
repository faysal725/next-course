import AllPosts from '@/components/posts/AllPosts'
import { getAllPosts } from '@/lib/posts-utils'
import React from 'react'




export default function AllPostPage({posts}) {
  return (
    <AllPosts posts={posts} />
  )
}


export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    },
    revalidate: 100
  }
}

