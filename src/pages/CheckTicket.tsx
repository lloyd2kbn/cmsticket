import React from 'react'
import CheckTicketHome from '../components/CheckTicketHome'
import Sidebar from '../components/Sidebar'
import '../scss/checkticket.scss'
function CheckTicket() {
  return (
    <div className='container'>
        <Sidebar/>
        <CheckTicketHome/>
    </div>
  )
}

export default CheckTicket