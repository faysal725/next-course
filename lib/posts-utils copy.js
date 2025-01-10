// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";


// const DUMMY_POSTS = [
//     {
//       slug: "getting-started-with-nextjs",
//       title: "this is title",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "next js is the react framework form production - it makes building fullstack.",
//       date: "2022-02-10",
//     },
  
//     {
//       slug: "getting-started-with-nextjs",
//       title: "this is title",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "next js is the react framework form production - it makes building fullstack.",
//       date: "2022-02-10",
//     },
  
//     {
//       slug: "getting-started-with-nextjs",
//       title: "this is title",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "next js is the react framework form production - it makes building fullstack.",
//       date: "2022-02-10",
//     },
//     {
//       slug: "getting-started-with-nextjs",
//       title: "this is title",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "next js is the react framework form production - it makes building fullstack.",
//       date: "2022-02-10",
//     },
//   ];
  

// const postsDirectory = path.join(process.cwd(), "posts");

// function getPostData(fileName) {
//   const filePath = path.join(postsDirectory, fileName);
//   const fileContent = fs.readFileSync(fileName, "utf-8");
//   const { data, content } = matter(fileContent);

//   const postSlug = fileName.replace(/\.md$/, ""); //removing file extension
//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

// export function getAllPosts() {
//   const postFiles = fs.readdirSync(postsDirectory);

//   const allPosts = postFiles.map((postFile) => {
//     return getPostData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? -1 : 1
//   );
//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);
//   return featuredPosts;
// }
