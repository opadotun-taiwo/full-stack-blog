import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCatgories from '../menuCategories/MenuCatgories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h2 className={styles.title}>Most popular</h2>
      <MenuPosts withImage={false}/>

      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h2 className={styles.title}>Categories</h2>
      <MenuCatgories />

     <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu
