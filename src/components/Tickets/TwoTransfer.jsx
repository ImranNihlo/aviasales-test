import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'

function TwoTransfer (props) {
  const tickets = useSelector(state => state.tickets.tickets);
  const twoTransfer = tickets.tickets.filter(tic => {
    if (tic.segments[0].stops.length === 2 && tic.segments[1].stops.length === 2) {
      return true
    }
  })

  return (
    <div>
      {twoTransfer.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index}/>
      })}
    </div>
  )
}

export default TwoTransfer;