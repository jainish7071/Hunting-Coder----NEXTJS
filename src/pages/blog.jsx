import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((data) => data.json())
      .then((blogsData) => {
        setBlogs(blogsData);
      });
  }, []);

  return (
    <div className={styles.main}>
      {blogs.map((blog) => {
        return (
          <div key={blog.slug} className={styles.blogItem}>
            <Link href={"blogpost/" + blog.slug}>
              <h3>{blog.title}</h3>
            </Link>
            <p className={styles.blogItemP}>{blog.content.substr(0, 140)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
