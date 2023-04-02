import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

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
// export async function getServerSideProps(context) {
//   let data = await fetch(`http://localhost:3000/api/getBlog?slug=${context.query.slug}`);
//   let myBlog = await data.json();
//   return {
//     props: { blog: myBlog }, // will be passed to the page component as props
//   };
// }

// For Generating HTML On Static Side and send to client when he requests
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "how-to-learn-flask" } }, { params: { slug: "how-to-learn-javascript" } }, { params: { slug: "how-to-learn-nextjs" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // Api Won't be there when we are building static HTML Pages
  const myBlog = await fs.promises.readFile(`./blogdata/${slug}.json`, "utf-8");
  return {
    props: { blog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
