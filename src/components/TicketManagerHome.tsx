import React from 'react'
import TicketManagerComponent from './TicketManagerComponent'
import TopBar from './TopBar'
import '../scss/ticketManager.scss'
function TicketManagerHome() {
  return (
    <div className='ticket_manager'>
            <TopBar/>
            <TicketManagerComponent/>
    </div>
  )
}

export default TicketManagerHome