import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'

function ThreeTransfer (props) {
  const tickets = useSelector(state => state.tickets.tickets);
  const threeTransfer = tickets.tickets.filter(tic => {
    if (tic.segments[0].stops.length === 3 && tic.segments[1].stops.length === 3) {
      return true
    }
  })
  return (
    <div>
      {threeTransfer.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index}/>
      })}
    </div>
  )
}

export default ThreeTransfer;