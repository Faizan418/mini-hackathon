import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.containar} id="About">
      <div className={styles.main}>
        <div className={styles.div_one}>
          <img
            className={styles.images}
            src="/images/about.png"
            alt="picture"
          />
        </div>
        <div className={styles.div_two}>
          <h3 className={styles.heading_one}>About</h3>
          <h1 className={styles.heading_two}>About Me?</h1>
          <p className={styles.heading_three}>
            I&#39;m Student of Governor Sindh IT Initiative Cloud Computing
            Genrating AI Engineer. Web 3.0 and Metaverse Learning programing ||
            TypeScript || JavaScript || Next.js || react || Database || Python
            || Html and Css... <br />
            <br /> And I&#39;m Student of &apos;SMIT&apos; Enroll in Web and
            Mobile app Devlopment and Python Web Mestry... <br />
            <br /> And I have Certificate of Cyber Security Ethical Hacking...
            <br /> I&apos;m English Typing Master Speed 50 W-P-M ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
