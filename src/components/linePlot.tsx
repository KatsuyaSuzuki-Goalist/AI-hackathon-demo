import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic'
const Line = dynamic(
  () => import('@ant-design/plots').then(({ Line }) => Line),
  { ssr: false },
)
import itData from '@/data/it.json'
import publicData from '@/data/publicServant.json'
import serviceData from '@/data/service.json'
import foodData from '@/data/food.json'
import beautyData from '@/data/beauty.json'
import hotelData from '@/data/hotel.json'

const LinePlot = (props: { value: string }) => {
  const [data, setData] = useState([
    ...itData.data, ...publicData.data, ...serviceData.data,
    ...foodData.data, ...beautyData.data, ...hotelData.data
  ]);

  useEffect(() => {
    let returnData: {
      name: string;
      month: string;
      value: number;
    }[] = []
    switch (props.value) {
      case '0':
        returnData = [
          ...itData.data, ...publicData.data, ...serviceData.data,
          ...foodData.data, ...beautyData.data, ...hotelData.data
        ]
        break;
      case '1':
        returnData = [...itData.data]
        break;
      case '2':
        returnData = [...hotelData.data]
        break;
      case '3':
        returnData = [...publicData.data]
        break;
      case '4':
        returnData = [...beautyData.data]
        break;
      case '5':
        returnData = [...serviceData.data]
        break;
      case '6':
        returnData = [...foodData.data]
        break;
    }
    setData(returnData)
  }, [props.value])

  const predictDay = '2023-01'

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    legend: {
      position: 'top',
    },
    smooth: false,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    annotations: [
      {
        type: 'regionFilter',
        start: [predictDay, 'max'],
        end: ['max', 'min'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: [predictDay, 'max'],
        content: 'Predict',
        offsetX: 4,
        offsetY: 16,
        style: {
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: [predictDay, 'max'],
        end: [predictDay, '0'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ]
  };

  // @ts-ignore
  return <Line {...config} />;
};

export default LinePlot