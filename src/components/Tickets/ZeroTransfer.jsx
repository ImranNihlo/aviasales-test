import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'

function ZeroTransfer (props) {
  const tickets = useSelector(state => state.tickets.tickets);
  const zeroTransfer = tickets.tickets.filter(tic => {
    if (tic.segments[0].stops.length === 0 && tic.segments[1].stops.length === 0) {
      return true
    }
  })
  return (
    <div>
      {zeroTransfer.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index}/>
      })}
    </div>
  )
}

export default ZeroTransfer;