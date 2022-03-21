import React from 'react';
import '../App'
import Sidebar from '../components/Sidebar';
import StatisticHome from '../components/StatisticHome';
function Home() {
  return (
    <div className='grid'>
          <div className='container'>
              <Sidebar/>
              <StatisticHome/>
          </div>
    </div>
  )
}

export default Home