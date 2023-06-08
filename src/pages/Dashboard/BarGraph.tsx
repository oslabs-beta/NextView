import { useContext } from 'react';
import { BarGraphContext } from './Contexts';
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

const BarGraph = () => {
  const barGraphData = useContext(BarGraphContext);
  const num = barGraphData?.length;

  return (
    <div className='bar-graph'>
      <p>Top {num} Slowest Page</p>
      <ResponsiveContainer width='100%' aspect={3}>
        <BarChart
          width={500}
          height={500}
          data={barGraphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
          <XAxis
            dataKey='page'
            label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }}
          />
          <YAxis
            padding={{ top: 50 }}
            tickSize={6}
            label={{
              value: 'Duration(milliseconds)',
              angle: -90,
              position: 'left',
            }}
          />
          <Tooltip
            offset={0}
            wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}
          />
          <Legend width={100} />
          <Bar
            radius={[8, 8, 8, 8]}
            dataKey='ms_avg'
            barSize={50}
            fill='#8884d8'
            animationBegin={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
