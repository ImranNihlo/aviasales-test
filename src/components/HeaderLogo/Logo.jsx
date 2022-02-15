import React from 'react'
import aviaLogo from "../../Images/Logo.png";
import styles from "./logo.module.scss";

function Logo (props) {
  return (
    <div className={styles.logo}>
      <img src={aviaLogo} alt={'logo'}/>
    </div>
  )
}

export default Logo