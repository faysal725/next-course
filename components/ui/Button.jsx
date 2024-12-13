import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}
