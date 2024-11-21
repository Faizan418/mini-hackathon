import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.containar} id="Skill">
      <div className={styles.main}>
        <h3 className={styles.heading_first}>Skills</h3>
        <h1 className={styles.heading_second}>What I am Capable of?</h1>
        <div className={styles.icons_div}>
          <Image
            src={"/images/icon-fram.png"}
            alt="icon"
            width={600}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
