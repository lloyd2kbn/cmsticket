import React from 'react'
import '../App'
import Sidebar from '../components/Sidebar';
import TicketManagerHome from '../components/TicketManagerHome';
import '../scss/ticketManagerComponent.scss'

function TicketManager() {
  return (
    <div className='container'>
        <Sidebar/>
        <TicketManagerHome/>
    </div>
  )
}

export default TicketManager