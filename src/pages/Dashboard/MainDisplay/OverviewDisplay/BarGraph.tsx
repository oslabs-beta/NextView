import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PageAvgDuration } from '../../../../types/ComponentPropTypes';
import React from 'react';

interface BarGraphProps {
  data: PageAvgDuration[];
}

const BarGraph: React.FC<BarGraphProps> = React.memo(({ data }) => {
  const num = data.length;

  return (
    <>
      <p className='absolute left-5 font-bold'>Top {num} Slowest Pages</p>
      <ResponsiveContainer height={400}>
        <BarChart
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
          <XAxis
            dataKey='page'
            label={{
              value: 'Page',
              position: 'bottom',
            }}
          />
          <YAxis
            padding={{ top: 20 }}
            tickSize={6}
            label={{
              value: 'Duration (ms)',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip
            offset={10}
            wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}
            formatter={(val) => val + 'ms'}
          />
          <Bar
            name='Duration'
            radius={[8, 8, 0, 0]}
            dataKey='ms_avg'
            barSize={50}
            fill='#5886a5'
            animationBegin={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
});

export default BarGraph;
