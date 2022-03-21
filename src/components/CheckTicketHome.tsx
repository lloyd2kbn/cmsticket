import React from 'react'
import '../scss/checkticketcomponent.scss'
import CheckTicketComponent from './CheckTicketComponent'
import TopBar from './TopBar'
function CheckTicketHome() {
  return (
    <div className='check_ticket-container'>
          <TopBar/>
          <CheckTicketComponent/>
    </div>
  )
}

export default CheckTicketHome