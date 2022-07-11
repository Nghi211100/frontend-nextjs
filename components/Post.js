import React from "react";
import Link from "next/link";
import styles from "./post.module.css";
const Post = ({ post, home }) => {
  return (
    <div className={styles.post}>
      {home == true ? (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className={styles.post__content}
        >
          <a>
            <div className={styles.author}>
              <p className={styles.fullname}>
                {post.attributes.author.data.attributes.first_name}{" "}
                {post.attributes.author.data.attributes.last_name}
              </p>
            </div>
            <h2 className={styles.title}>{post.attributes.title}</h2>
            <h4 className={styles.description}>
              {post.attributes.description}
            </h4>

            <p>{post.attributes.content.substring(0, 100)}...</p>
            <div className={styles.image}>
              <img
                className={styles.image__post}
                src={
                  process.env.URL_API +
                  post.attributes.photo.data.attributes.url
                }
                alt=""
              />
            </div>
          </a>
        </Link>
      ) : (
        <>
          <div className={styles.author}>
            <p className={styles.fullname}>
              {post.attributes.author.data.attributes.first_name}{" "}
              {post.attributes.author.data.attributes.last_name}
            </p>
          </div>
          <h2>{post.attributes.title}</h2>
          <h3>{post.attributes.description}</h3>

          <p>{post.attributes.content}</p>

          <img
            className={styles.image__post}
            src={
              process.env.URL_API + post.attributes.photo.data.attributes.url
            }
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Post;
