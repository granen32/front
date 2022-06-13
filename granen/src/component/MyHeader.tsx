import React from 'react'
import styles from "../assets/scss/Header.module.scss";
const number = 5;

const MyHeader = () => {
  return (
    <>
    <nav className={styles.header_wrap}>
      <h2>안녕 리액트{number}</h2>
      <strong className={styles.important_text}>react.js</strong>
    </nav>
    </>
  )
}

export default MyHeader