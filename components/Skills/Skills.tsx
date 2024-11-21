import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className={styles.containar} id='Skill'>

        <div className={styles.main}>

          <h3 className={styles.heading_first}>Skills</h3>
          <h1 className={styles.heading_second}>What I am Capable of?</h1>
          <div className={styles.icons_div}>
            <Image src={'/images/icon-fram.png'} alt='icon' width={600} height={100}/>
            {/* <Image src={'/images/html_logo.png'} alt='html logo' height={20} width={40}/> */}
            {/* <Image src={'/images/css_logo.png'} alt='css logo' height={20} width={40}/> */}
            {/* <Image src={'/images/bootstrap_logo.png'} alt='css logo' height={20} width={40}/> */}
            {/* <Image src={'/images/tailwind_logo.png'} alt='css logo' height={20} width={40}/> */}
            {/* <Image src={'/images/javascript_logo.png'} alt='css logo' height={0} width={100}/> */}
            {/* <Image src={'/images/python_logo.jpg'} alt='css logo' height={20} width={70}/> */}

          </div>

          
        </div>  
      
    </div>
  )
}

export default Skills
