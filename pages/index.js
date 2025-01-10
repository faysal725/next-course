import FeaturedPost from "@/components/home-page/FeaturedPost";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/posts-utils";
import React from "react";


export default function HomePage({posts}) {
  return (
    <>
      <Hero />
      <FeaturedPost posts={posts} />
    </>
  );
}



export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  
  
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 100
  }
}