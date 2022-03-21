import React from 'react'
import '../scss/topbar.scss'
import Input from './Input'
function TopBar() {
  return (
    <div className='topbar'>
                <Input/>
                <div className='right_topbar'>
                        <img src="./assets/topright.png" alt="" />
                </div>
    </div>
  )
}

export default TopBar