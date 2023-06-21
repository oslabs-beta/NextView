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
      <ResponsiveContainer width='98%' height={350}>
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
          <YAxis label={{ value: 'Duration', angle: -90, position: 'left' }} />
          <Tooltip formatter={(val) => val + 'ms'} />
          <Legend />
          <Line
            dot={false}
            name='Client'
            type='monotone'
            dataKey='client'
            stroke='#bc5090'
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            dot={false}
            name='Server'
            type='monotone'
            dataKey='server'
            stroke='#ffa600'
            strokeWidth={3}
          />
          <Line
            dot={false}
            name='Internal'
            type='monotone'
            dataKey='internal'
            stroke='#003f5c'
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
