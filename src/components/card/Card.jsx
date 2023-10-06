import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
              <span className={styles.date}>11.2.3023 - </span>
              <span className={styles.category}>Culture</span>
            </div>
            <Link href="/" className={styles.title}>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt.</h1>
            </Link>
            <p className={styles.desc}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, illum architecto explicabo facilis ipsam sequi 
               numquam quas praesentium saepe? Blanditiis doloremque earum sed ad delectus mollitia enim nihil aspernatur vel? 
            </p>
            <Link href="/" className={styles.link}>
                read more...
            </Link>
          </div>
    </div> 
  )
}

export default Card
