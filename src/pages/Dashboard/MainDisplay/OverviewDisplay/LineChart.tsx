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

const LineChartComponent = ({ data }) => {
  return (
    <>
      <p className='absolute left-5 font-bold'>
        Average Span Load Duration Over Time
      </p>
      <ResponsiveContainer width='98%' height={450}>
        <LineChart
          data={data}
          margin={{
            top: 50,
            right: 50,
            left: 15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='period' />
          <YAxis
            label={{ value: 'Duration (ms)', angle: -90, position: 'left' }}
          />
          <Tooltip />
          <Legend />
          <Line
            dot={false}
            name='Client'
            type='monotone'
            dataKey='client'
            stroke='#264653'
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            dot={false}
            name='Server'
            type='monotone'
            dataKey='server'
            stroke='#2a9d8f'
            strokeWidth={3}
          />
          <Line
            dot={false}
            name='Internal'
            type='monotone'
            dataKey='internal'
            stroke='#e76f51'
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
