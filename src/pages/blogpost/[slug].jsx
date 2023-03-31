import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1 : find the file corresponding to the slug;
// Step 2 : Populate them inside the page
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <div className={styles.container}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, error quisquam! Explicabo expedita corporis mollitia libero. Ab deleniti, quod animi distinctio cum labore facilis minima tempore! Nam ullam ad magnam. ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta vel eaque accusamus quia magni corrupti. Dignissimos, nisi tenetur non magni quia iste.</div>
    </div>
  );
};

export default Slug;
