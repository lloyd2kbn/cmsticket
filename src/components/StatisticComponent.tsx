import React from 'react'
import Chart from '../chart/Chart'
import Donut from '../chart/Donut'

import '../scss/statisticComponent.scss'
function StatisticComponent() {
  return (
    <div className='statistic_container'>
        <h2 className='statistic-title'>Thống kê</h2>
        <div className='statistic-info'>
            <div className='statistic-revenue-title'>Doanh thu</div>
            <input type="date" className='statistic-date'/>
        </div>
        <Chart/>
        <h6 className='total-statistic-title'>Tổng doanh thu theo tuần</h6>
        <div className='total-statistic'>
          <h3>525.145.000</h3>
          <p className='total-statistic-unit'>đồng</p>
        </div>
        <div className='container-donut'>
          <input type="date"  />
           <Donut/>
           <Donut/>
        </div>
   
  
    </div>
  )
}

export default StatisticComponent