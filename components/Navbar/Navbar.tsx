'use client'
import Link from 'next/link'
import React, { useState } from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div>

        <nav className={styles.nav_bar}>
            <div className={styles.brand_n_div}>
                <h1 className={styles.brand_name}>Faizan</h1>
            </div>
                <ul className={`${styles.ul_div} ${menuVisible ? styles.show_menu : ''}`}>
                    <Link className={styles.Links_} href={'#Home'}><li className={styles.li_}>Home</li></Link>
                    <Link className={styles.Links_} href={'#About'}><li className={styles.li_}>About</li></Link>
                    <Link className={styles.Links_} href={'#Skill'}><li className={styles.li_}>Skill</li></Link>
                    <Link className={styles.Links_} href={'#'}><li className={styles.li_}>Project</li></Link>
                    <Link className={styles.Links_} href={'#'}><li className={styles.li_}>Contact</li></Link>
                </ul> 
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu" 
          aria-expanded={menuVisible}>&#9776;</button>
        </nav>
      
    </div>
  )
}

export default Navbar
