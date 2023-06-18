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

const PageLineChart = () => {
  return (
    <ResponsiveContainer width='95%' height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 90,
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
          dataKey='client'
          stroke='#264653'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='server' stroke='#2a9d8f' />
        <Line type='monotone' dataKey='internal' stroke='#e76f51' />
        {/* <Line type='monotone' dataKey='consumer' stroke='#f4a261' />
          <Line type='monotone' dataKey='producer' stroke='#e9c46a' /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PageLineChart;
