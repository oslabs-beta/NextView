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
    <ResponsiveContainer width='100%' height={450}>
      <LineChart
        data={data}
        margin={{
          top: 5,
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
          type='monotone'
          dataKey='client'
          stroke='#264653'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='server' stroke='#2a9d8f' />
        <Line type='monotone' dataKey='internal' stroke='#e76f51' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
