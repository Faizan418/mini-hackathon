import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containar}>
      <div className={styles.main}>
        <h3 className={styles.footer_heading}>
          &copy; 2024; Devlop by Muhammad Faizan.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
