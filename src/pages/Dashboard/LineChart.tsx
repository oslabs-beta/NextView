import React, { useContext, useState } from 'react';
import { LineChartContext } from './Contexts';
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

const LineChartComponent = () => {
  const lineChartData = useContext(LineChartContext);

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={lineChartData}
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
      <YAxis label={{ value: 'Duration (ms)', angle: -90, position: 'left' }} />
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
  );
};

export default LineChartComponent;
