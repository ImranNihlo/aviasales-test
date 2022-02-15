import React from 'react'
import styles from "./tickets.module.scss";
import { Route, Routes } from 'react-router-dom'
import AllTickets from './AllTickets'
import OneTransfer from './OneTransfer'
import ZeroTransfer from './ZeroTransfer'
import TwoTransfer from './TwoTransfer'
import ThreeTransfer from './ThreeTransfer'

function Tickets (props) {
  return (
    <div className={styles.tickets} id='tickets'>
      <Routes>
        <Route path={'/'} element={<AllTickets />} />
        <Route path={'/zero'} element={<ZeroTransfer />} />
        <Route path={'/one'} element={<OneTransfer />} />
        <Route path={'/two'} element={<TwoTransfer />} />
        <Route path={'/three'} element={<ThreeTransfer />} />
      </Routes>
    </div>
  )
}

export default Tickets;