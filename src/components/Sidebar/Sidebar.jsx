import React from 'react'
import styles from "./sidebar.module.scss";
import Input from './Input'

function Sidebar (props) {
  return (
    <div className={styles.sidebar}>
      <p>
        количество пересадок
      </p>
      <Input />
    </div>
  )
}

export default Sidebar