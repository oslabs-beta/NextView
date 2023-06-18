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

const PageLineChart = ({ avgPageDurationsOverTime }) => {
  return (
    <ResponsiveContainer width='40%' height={400}>
      <LineChart
        width={500}
        height={300}
        data={avgPageDurationsOverTime}
        margin={{
          top: 5,
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
          stroke='#00ff00'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PageLineChart;
