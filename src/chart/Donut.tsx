import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const Donut = () => {
  const data = [
    {
      type: 'Vé đã sử dụng',
      value: 27,
    },
    {
      type: 'Vé chưa sủ dụng',
      value: 25,
    },
   
  ];
  const config = {
    appendPadding: 10,
    width:200,
    height:200,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    color:['#FF8A48','#4F75FF'],
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
        fontSize: 10,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
       
      },
    },
  };
  return <Pie {...config} />;
};
export default Donut;