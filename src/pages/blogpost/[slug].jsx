import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   fetch(`http://localhost:3000/api/getBlog?slug=${router.query.slug}`)
  //     .then((a) => a.json())
  //     .then((blog) => {
  //       setBlog(blog);
  //     });
  // }, [router.isReady, router.query.slug]);

  return (
    <div className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div className={styles.container}>{blog && blog.content}</div>
    </div>
  );
};

// For Generating HTML On server side and then send it to Client --> Data will be available in View Source
// This function will run on Server Side
export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`);
  let myBlog = await data.json();
  return {
    props: { blog: myBlog }, // will be passed to the page component as props
  };
}

export default Slug;
