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

interface SpanLineChartProps {
  avgActionDurationsOverTime: TimeSeriesData[];
}

const SpanLineChart: React.FC<SpanLineChartProps> = React.memo(
  ({ avgActionDurationsOverTime }) => {
    const colors = [
      '#006CD1',
      '#f95d6a',
      '#d45087',

      '#ff7c43',
      '#665191',
      '#f95d6a',
      '#2f4b7c',
      '#a05195',
    ];

    const actions = Object.keys(avgActionDurationsOverTime[0]).filter(
      (el) => el !== 'period',
    );

    const lines = actions.map((action, i) => {
      return (
        <Line
          activeDot={{ r: 8 }}
          key={i}
          type='monotone'
          dataKey={action}
          stroke={colors[i]}
          strokeWidth={3}
          dot={false}
        ></Line>
      );
    });

    return (
      <>
        <p className='absolute left-5 top-0 pt-5 font-bold'>
          Average Action Duration Over Time
        </p>
        <ResponsiveContainer width='95%' height={350}>
          <LineChart
            data={avgActionDurationsOverTime}
            margin={{
              top: 50,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='period' />
            <Label value='Duration' />
            <YAxis
              label={{ value: 'Duration', angle: -90, position: 'left' }}
            />
            <Tooltip />
            <Legend />
            {lines}
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
);

export default SpanLineChart;
