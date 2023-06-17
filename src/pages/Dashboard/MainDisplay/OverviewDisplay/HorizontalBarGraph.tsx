import { useContext } from 'react';
import {
  PieChartContext,
  PieChartContextType,
} from '../../../../contexts/dashboardContexts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

const barColors = ['#e4f1fe', '#8dc6ff', '22313f', '34495e', '#ffc93c'];

const HorizontalBarGragh = () => {
  const { pieData } = useContext(
    PieChartContext as React.Context<PieChartContextType>,
  );

  return (
    <div className='bar-graph'>
      <p>Average Span Load Duration</p>

      <BarChart
        layout='vertical'
        height={400}
        width={700}
        data={pieData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
        <XAxis
          dataKey='ms_avg'
          axisLine={true}
          type='number'
          padding={{ right: 30 }}
          label={{
            value: 'Duration(milliseconds)',
            position: 'bottom',
          }}
          tickLine={true}
        />
        <YAxis
          orientation='left'
          dataKey='kind'
          type='category'
          axisLine={true}
          tickLine={true}
          label={{
            value: 'Kinds',
            angle: -90,
            position: 'insideLeft',
            offset: -10,
          }}
        />
        <Tooltip
          offset={0}
          wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}
        />
        <Legend width={100} verticalAlign='top' align='right' />
        <Bar
          radius={[8, 8, 8, 8]}
          dataKey='ms_avg'
          barSize={50}
          animationBegin={5}
        >
          {pieData &&
            pieData.map((data, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
            ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default HorizontalBarGragh;
