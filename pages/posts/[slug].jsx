import PostContent from '@/components/posts/post-detail/PostContent'
import { getPostData, getPostSlug } from '@/lib/posts-utils';
import React from 'react'

export default function SinglePostPage({post}) {

  console.log(post)
  return (
    <PostContent post={post}  />
  )
}


export function getStaticProps(context) {
  
  const {params} = context;
  let {slug} = params 



  const postData = getPostData(slug)

  
  return {
    props: {
      post: postData 
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postPathNames= getPostSlug()

  return {
    paths: postPathNames.map(slug => ({params: {slug: slug}})),
     fallback: false
  }
}