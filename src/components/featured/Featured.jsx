import React from 'react'
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hy, Opadotun taiwo here!</b> I wear different hat and share my ideas here.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Enjoy and read all you can becuase it is interesting</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veniam doloremque esse, earum natus eius 
            maxime delectus doloribus dolore nihil vel, a explicabo! Aperiam at ipsa consequuntur accusamus ullam perspiciatis distinctio.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
