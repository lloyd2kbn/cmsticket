import React from 'react'
import SettingTicketComponent from './SettingTicketComponent'
import TopBar from './TopBar'
import '../scss/settingTicketHome.scss'

function SettingTicketHome() {
  return (
    <div className='setting_ticket_container'>
                <TopBar/>
                <SettingTicketComponent/>
    </div>
  )
}

export default SettingTicketHome