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
import { TimeSeriesData } from '../../../../types/ComponentPropTypes';
import React from 'react';

interface PageLineChartProps {
  avgPageDurationsOverTime: TimeSeriesData[];
}

const PageLineChart: React.FC<PageLineChartProps> = React.memo(
  ({ avgPageDurationsOverTime }) => {
    return (
      <>
        <p className='absolute left-5 top-0 pt-5 font-bold'>
          Average Page Load Duration Over Time
        </p>
        <ResponsiveContainer height={350}>
          <LineChart
            data={avgPageDurationsOverTime}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='period' />
            <Label value='Duration' />
            <YAxis
              label={{ value: 'Duration (ms)', angle: -90, position: 'left' }}
            />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='Avg. duration (ms)'
              stroke='#ffa600'
              activeDot={{ r: 8 }}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
);

export default PageLineChart;
