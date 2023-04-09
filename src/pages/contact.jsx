import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const body = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postContact/", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((a) => a.json())
      .then((e) => {
        alert("Thanks for contacting Us.");
        setName("");
        setEmail("");
        setDesc("");
        setPhone("");
      });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "desc":
        setDesc(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit}>
        <div className={styles["mb-3"]}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input required type="text" onChange={handleChange} value={name} className={styles.input} id="name" name="name" />
        </div>
        <div className={styles["mb-3"]}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input required type="email" onChange={handleChange} value={email} name="email" className={styles.input} id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className={styles.formText}>
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className={styles["mb-3"]}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone
          </label>
          <input required type="phone" onChange={handleChange} value={phone} className={styles.input} id="phone" name="phone" />
        </div>
        <div className={styles["mb-3"]}>
          <label className={styles.formLabel} htmlFor="floatingTextarea">
            Concern
          </label>
          <textarea required onChange={handleChange} value={desc} className={styles.input} id="desc" name="desc" />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
