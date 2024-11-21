import React from "react";
import styles from "./Contact.module.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className={styles.containar} id="Contact">
      <div className={styles.main}>
        <h3 className={styles.heading_first}>Contacts</h3>
        <h1 className={styles.heading_second}>Get in touch</h1>
        <Link className={styles.gmail} href={"mailto:muhammadf4060@gmail.com"}>
          muhammadf4060@gmail.com
        </Link>
        <div className={styles.icons_div}>
          <Link href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"}>
            <FaLinkedin />
          </Link>
          <Link href={"https://github.com/Faizan418"}>
            <FaGithub />
          </Link>
          <Link href={"https://www.instagram.com/fazii.963/"}>
            <FaInstagram />
          </Link>
          <Link href={"https://wa.me/+923406044359"}>
            <FaWhatsapp />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
