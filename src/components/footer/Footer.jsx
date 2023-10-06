import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50}/>
          <h1 className={styles.logotext}>Opadotun Blog</h1>
        </div>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam officia rerum rem ut, sit dolorum consectetur sunt quibusdam incidunt. Praesentium vitae facilis iste. Maxime quam doloremque nisi minima sint officiis.</p>
        <div className={styles.icon}>
          <Image src="/facebook.png" alt='' width={18} height={18}/>
          <Image src="/instagram.png" alt='' width={18} height={18}/>
          <Image src="/tiktok.png" alt='' width={18} height={18}/>
          <Image src="/youtube.png" alt='' width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.ListTitle}>Links</span>
          <Link href="">Homepage</Link>
          <Link href="">Blog</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.ListTitle}>Tags</span>
          <Link href="">Homepage</Link>
          <Link href="">Blog</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.ListTitle}>Social</span>
          <Link href="">Homepage</Link>
          <Link href="">Blog</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
