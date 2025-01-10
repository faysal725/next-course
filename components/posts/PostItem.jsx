import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`
  return (
    <li className={classes.post}>
      <Link href={linkPath} legacyBehavior>
        <a>
          <div>
            <Image src={imagePath} width={300} alt={title} height={200} layout="responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3> <time datetime="">{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
