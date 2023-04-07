import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import InfiniteScroll from "react-infinite-scroller";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 10;
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((data) => data.json())
  //     .then((blogsData) => {
  //       setBlogs(blogsData);
  //     });
  // }, []);

  const fetchMoreData = async (pageNo) => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${pageNo * pageSize}`);
    let data = await d.json();
    setBlogs(data.allBlogs);
    setHasMore(data.allCount > pageNo * pageNo);
  };

  return (
    <div className={styles.main}>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {blogs &&
          blogs.map((blog) => {
            return (
              <div key={blog.slug} className={styles.blogItem}>
                <Link href={"blogpost/" + blog.slug}>
                  <h3>{blog.title}</h3>
                </Link>
                <p className={styles.blogItemP}>{blog.metadesc.substr(0, 60)}...</p>
                <Link href={"blogpost/" + blog.slug}>
                  <button className={styles.btn}>Read More</button>
                </Link>
              </div>
            );
          })}
      </InfiniteScroll>
      {/* {blogs.map((blog) => {
        return (
          <div key={blog.slug} className={styles.blogItem}>
            <Link href={"blogpost/" + blog.slug}>
              <h3>{blog.title}</h3>
            </Link>
            <p className={styles.blogItemP}>{blog.metadesc.substr(0, 60)}...</p>
            <Link href={"blogpost/" + blog.slug}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>
        );
      })} */}
    </div>
  );
};

// For Generating HTML On server side and then send it to Client --> Data will be available in View Source
// This function will run on Server Side
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let myProps = await data.json();
//   return {
//     props: { blogs: myProps }, // will be passed to the page component as props
//   };
// }

// For Generating HTML On Static Side and send to client when he requests
export async function getStaticProps(context) {
  // Api Won't be there while we are building Static Site
  let data = await fs.promises.readdir("./blogdata");
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const fileName = data[index];
    let blog = await fs.promises.readFile(`./blogdata/${fileName}`, "utf-8");
    allBlogs.push(JSON.parse(blog));
  }
  return {
    props: { blogs: allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
