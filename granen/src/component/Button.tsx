import React from 'react';
import styles from "../assets/css/Button.module.scss"; 

type ButtonProps = {
  text :string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className={styles.btn}>{text}</button>
  )
}
export default Button;