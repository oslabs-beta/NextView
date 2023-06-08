import React, { useContext, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '00:00',
    client: 4000,
    server: 2400,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2400,
  },
  {
    name: '01:00',
    client: 3000,
    server: 1398,
    internal: 5000,
    consumer: 0,
    producer: 0,
    amt: 2210,
  },
  {
    name: '02:00',
    client: 2000,
    server: 9800,
    internal: 1000,
    consumer: 0,
    producer: 0,
    amt: 2290,
  },
  {
    name: '03:00',
    client: 2780,
    server: 3908,
    internal: 4000,
    consumer: 0,
    producer: 0,
    amt: 2000,
  },
  {
    name: '04:00',
    client: 1890,
    server: 4800,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2181,
  },
  {
    name: '05:00',
    client: 2390,
    server: 3800,
    internal: 1000,
    consumer: 0,
    producer: 0,
    amt: 2500,
  },
  {
    name: '06:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '07:00',
    client: 4000,
    server: 2400,
    internal: 6000,
    consumer: 0,
    producer: 0,
    amt: 2400,
  },
  {
    name: '08:00',
    client: 3000,
    server: 1398,
    internal: 7000,
    consumer: 0,
    producer: 0,
    amt: 2210,
  },
  {
    name: '09:00',
    client: 2000,
    server: 9800,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2290,
  },
  {
    name: '10:00',
    client: 2780,
    server: 3908,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2000,
  },
  {
    name: '11:00',
    client: 1890,
    server: 4800,
    internal: 5000,
    consumer: 0,
    producer: 0,
    amt: 2181,
  },
  {
    name: '12:00',
    client: 2390,
    server: 3800,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2500,
  },
  {
    name: '13:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '14:00',
    client: 4000,
    server: 2400,
    internal: 1000,
    consumer: 0,
    producer: 0,
    amt: 2400,
  },
  {
    name: '15:00',
    client: 3000,
    server: 1398,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2210,
  },
  {
    name: '16:00',
    client: 2000,
    server: 9800,
    internal: 2000,
    consumer: 0,
    producer: 0,
    amt: 2290,
  },
  {
    name: '17:00',
    client: 2780,
    server: 3908,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2000,
  },
  {
    name: '18:00',
    client: 1890,
    server: 4800,
    internal: 5000,
    consumer: 0,
    producer: 0,
    amt: 2181,
  },
  {
    name: '19:00',
    client: 2390,
    server: 3800,
    internal: 4000,
    consumer: 0,
    producer: 0,
    amt: 2500,
  },
  {
    name: '20:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '21:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '22:00',
    client: 3490,
    server: 4300,
    internal: 8000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '23:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
  {
    name: '24:00',
    client: 3490,
    server: 4300,
    internal: 3000,
    consumer: 0,
    producer: 0,
    amt: 2100,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <Label value='Duration' />
        <YAxis
          label={{ value: 'Duration (ms)', angle: -90, position: 'left' }}
        />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='client'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='server' stroke='#0088ff' />
        <Line type='monotone' dataKey='internal' stroke='#82ca9d' />
        <Line type='monotone' dataKey='consumer' stroke='#ff0000' />
        <Line type='monotone' dataKey='producer' stroke='#ffdb58' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
