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

// will replace with state
const data = [
  {
    name: 'Page A',
    duration: 4000,
  },
  {
    name: 'Page B',
    duration: 3000,
  },
  {
    name: 'Page C',
    duration: 2780,
  },
  {
    name: 'Page D',
    duration: 2000,
  },
  {
    name: 'Page E',
    duration: 1890,
  },
];

const num = data.length;

const BarGraph = () => {
  return (
    <div className='bar-graph'>
      <p>Top {num} Slowest Pages</p>
      {/* <ResponsiveContainer width='100%' aspect={3}> */}
      <BarChart
        height={400}
        width={700}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
        <XAxis
          dataKey='name'
          label={{
            value: 'Pages',
            position: 'insideBottom',
            offset: -10,
          }}
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
          wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}
        />
        <Legend width={100} verticalAlign='top' align='right' />
        <Bar
          radius={[8, 8, 8, 8]}
          dataKey='duration'
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
