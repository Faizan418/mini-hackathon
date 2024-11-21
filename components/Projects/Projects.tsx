import React from "react";
import styles from "./Project.module.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.containar} id="Project">
      <div className={styles.main}>
        <h3 className={styles.heading_first}>Project</h3>
        <h1 className={styles.heading_second}>What I have made?</h1>

        <div className={styles.grid}>
          <div className={styles.cards}>
            <img
              className={styles.imges}
              src="/images/portfolio_img.PNG"
              alt="project-1"
            />
            <div className={styles.img_info}>
              <h3 className={styles.img_heading_one}>Portfolio</h3>
              <p className={styles.img_heading_two}>
                This is my personal Portfolio create with next.js.
              </p>
              <Link href={'https://personal-portfolio-ashy-three-74.vercel.app/'} target="_blank"> <button className={styles.view_btn} type="button">View Live</button></Link>
            </div>
          </div>
          <div className={styles.cards}>
            <img
              className={styles.imges}
              src="/images/multi_pages_img.PNG"
              alt="project-2"
            />
            <div className={styles.img_info}>
              <h3 className={styles.img_heading_one}>Multi Pages</h3>
              <p className={styles.img_heading_two}>
                Multi pages web clone create with next.js.
              </p>
              <Link href={'https://mile2-assignment-css.vercel.app/'} target="_blank"> <button className={styles.view_btn} type="button">View Live</button></Link>
            </div>
          </div>
          <div className={styles.cards}>
            <img
              className={styles.imges}
              src="/images/e-commerce_img.PNG"
              alt="project-3"
            />
            <div className={styles.img_info}>
              <h3 className={styles.img_heading_one}>E-commerce</h3>
              <p className={styles.img_heading_two}>
                E-commerce web clone create with next.js.
              </p>
              <Link href={'https://mile3-project.vercel.app/'} target="_blank"> <button className={styles.view_btn} type="button">View Live</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
