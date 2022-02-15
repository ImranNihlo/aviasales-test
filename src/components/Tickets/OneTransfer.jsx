import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'

function OneTransfer (props) {
  const tickets = useSelector(state => state.tickets.tickets);
  const oneTransfer = tickets.tickets.filter(tic => {
    if (tic.segments[0].stops.length === 1 && tic.segments[1].stops.length === 1) {
      return true
    }
  })
  return (
    <div>
      {oneTransfer.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index}/>
      })}
    </div>
  )
}

export default OneTransfer;