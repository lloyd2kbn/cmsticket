import React from 'react'
import SettingTicketHome from '../components/SettingTicketHome'
import Sidebar from '../components/Sidebar'
import '../scss/settingticket.scss'
function SettingTicket() {
  return (
    <div className='container'>
          <Sidebar/>
          <SettingTicketHome/>
    </div>
  )
}

export default SettingTicket