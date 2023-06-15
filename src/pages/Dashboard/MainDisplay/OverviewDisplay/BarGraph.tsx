import { useContext } from 'react';
import { BarGraphContext } from '../../../../contexts/dashboardContexts';
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

  //TODO: figure out how to show long page names

  return (
    <div className='bar-graph'>
      <p>Top {num} Slowest Pages</p>
      {/* <ResponsiveContainer width='100%' aspect={3}> */}
      <BarChart
        height={400}
        width={700}
        data={barGraphData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
        <XAxis
          dataKey='page'
          label={{
            value: 'Pages',
            position: 'insideBottom',
            offset: -10,
          }}
          // interval={0}
        />
        <YAxis
          padding={{ top: 20 }}
          tickSize={6}
          label={{
            value: 'Duration(milliseconds)',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip
          offset={0}
          // content={(props) => <CustomTooltip {...props} />}
          wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}
        />
        <Legend width={100} verticalAlign='top' align='right' />
        <Bar
          radius={[8, 8, 8, 8]}
          dataKey='ms_avg'
          barSize={50}
          fill='#2a9d8f'
          animationBegin={5}
        />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default BarGraph;
