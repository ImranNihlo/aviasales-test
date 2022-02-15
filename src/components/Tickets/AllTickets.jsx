import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'

function AllTickets (props) {
  const tickets = useSelector(state => state.tickets.tickets);

  return (
    <div>
      {tickets.tickets.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index}/>
      })}
    </div>
  )
}

export default AllTickets