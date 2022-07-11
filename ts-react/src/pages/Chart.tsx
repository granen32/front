import React from 'react'
import {
  coinIdProps, 
  chartProps
} from "../types" 
import { useQuery } from 'react-query';
import { chartCoin } from '../api';
import APEXChart from "react-apexcharts";
const Chart = ({coinId}:coinIdProps) => {
  const {isLoading, data} = useQuery<chartProps[]>(["ohlcv", coinId], () =>chartCoin(coinId),{refetchInterval : 500});
  return (
    <>
      {isLoading ? "Loading Chart..." : 
      <APEXChart 
        type='line'
        series={[
          {
            name: "Open Price",
            data: data?.map((price) => Number(price.open)) as number[],
            // 타입 강제변환이 필요함  ->> 데이터가 넘버로 받아오기 때문에 타입을 강제해줘야함
          },
          {
            name: "Close Price",
            data: data?.map((price) => Number(price.close)) as number[],
            // 타입 강제변환이 필요함  ->> 데이터가 넘버로 받아오기 때문에 타입을 강제해줘야함
          },
        ]}
        options={{
          theme:{
            mode: 'dark',
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,      
        },
          grid: {
            show:false,
          },
          yaxis:{
            show:false
          },
          xaxis:{
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            type: "datetime",
            categories: data?.map(price => (price.time_close * 1000))
          },
          fill: {
            type:"gradient",
            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
          },
          colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          chart:{
            width:500,
            height:500,
            toolbar:{
              show : false,
            },
            background: "transparent",
          }
        }}
      />
      }
    </>
  )
}

export default Chart