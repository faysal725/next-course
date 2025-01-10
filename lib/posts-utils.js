import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
    isFeatured: true,
    content:"# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, doloribus modi! Dolore dicta illum obcaecati possimus explicabo quae cupiditate et!"
  },

  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
    isFeatured: false,
    content:"# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, doloribus modi! Dolore dicta illum obcaecati possimus explicabo quae cupiditate et!"
  },

  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
    isFeatured: false,
    content:"# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, doloribus modi! Dolore dicta illum obcaecati possimus explicabo quae cupiditate et!"
  },
  {
    slug: "getting-started-with-nextjs",
    title: "this is title",
    image: "getting-started-nextjs.png",
    excerpt:
      "next js is the react framework form production - it makes building fullstack.",
    date: "2022-02-10",
    isFeatured: false,
    content:"# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, doloribus modi! Dolore dicta illum obcaecati possimus explicabo quae cupiditate et!"
  },
];

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlug() {
  const slug = DUMMY_POSTS.map((post) => post.slug);

  return slug;
}

export function getPostData(postIdentifier) {
  const postData = DUMMY_POSTS.find((post) => post.slug === postIdentifier);

  return postData;
}

export function getAllPosts() {
  const allPosts = DUMMY_POSTS;

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
