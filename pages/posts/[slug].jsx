import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData, getPostSlug } from "@/lib/posts-utils";
import Head from "next/head";
import React from "react";

export default function SinglePostPage({ post }) {
  console.log(post);
  return (
    <>
      
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="send me your messages" />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  let { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postPathNames = getPostSlug();

  return {
    paths: postPathNames.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
