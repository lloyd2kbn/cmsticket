import React from 'react'
import '../scss/statistic.scss'
import StatisticComponent from './StatisticComponent'
import TopBar from './TopBar'
function StatisticHome() {
  return (
    <div className='statistic'>
            <TopBar/>
            <StatisticComponent/>
    </div>
  )
}

export default StatisticHome