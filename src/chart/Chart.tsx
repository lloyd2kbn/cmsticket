
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      smooth: true,
      width: 200,
      height: 200,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 6,
      },
      color : '#FF8A48',
      
  
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#ffffff 0.5:#FF8A48 1:#FF8A48 ',
          
        };
      },
    };
  
    return <Area {...config} />;
  };

export const Chart = () => {
  return (
    <div style={{height:200,marginTop:100}}><DemoArea /></div>
  )
}

export default Chart