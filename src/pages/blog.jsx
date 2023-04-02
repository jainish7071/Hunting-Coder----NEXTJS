import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((data) => data.json())
  //     .then((blogsData) => {
  //       setBlogs(blogsData);
  //     });
  // }, []);

  return (
    <div className={styles.main}>
      {props.blogs.map((blog) => {
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

// For Generating HTML On server side and then send it to Client --> Data will be available in View Source
// This function will run on Server Side
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let myProps = await data.json();
  return {
    props: { blogs: myProps }, // will be passed to the page component as props
  };
}

export default Blog;
