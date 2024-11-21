import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div id="Home" className={styles.containar}>
      <div className={styles.main_div}>
        <div className={styles.div_one}>
          <h3 className={styles.heading_first}>Hello! Everyone I am</h3>
          <h1 className={styles.heading_second}>Muhammad Faizan</h1>
          <p className={styles.heading_third}>
            I&#39;m Student of Governor Sindh IT Initiative Cloud Computing
            Genrative <br /> AI and Metavarce and I&#39;m Student of Saylani
            Mass IT Traning.
          </p>
          <div className={styles.btn_div}>
            <Link href={"/images/faizan's_cv.pdf"} download={"faizan's_cv.pdf"}>
              <button className={styles.btn1} type="button">
                Download CV{" "}
              </button>
            </Link>
            <button className={styles.btn2} type="button">
              Explore More
            </button>
          </div>
        </div>

        <div className={styles.div_two}>
          <img className={styles.imgage} src="/images/done.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
