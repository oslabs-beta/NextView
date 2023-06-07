import React, { useCallback, useState, useContext } from 'react';
import { PieChartContext } from './Contexts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#006d77', '#83c5be', '#e29578', '#ffe1a8', '#b56576'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='#14213d'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieGraph() {
  const pieChartData = useContext(PieChartContext);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieChartData}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
      >
        {pieChartData?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend layout='vertical' align='center' />
    </PieChart>
  );
}
