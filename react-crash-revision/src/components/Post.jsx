import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ body, author, id }) => {
  return (
    <li className={styles.post}>
      <Link to={id} className={styles.link}>
        <p className={styles.author}>{author}</p>
        <p className={styles.body}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
