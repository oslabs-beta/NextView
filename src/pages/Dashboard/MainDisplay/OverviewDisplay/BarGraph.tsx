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

const BarGraph = ({ data }) => {
  const num = data.length;
  //TODO: figure out how to show long page names
  return (
    <>
      <p className='absolute left-5 font-bold'>Top {num} Slowest Pages</p>
      <ResponsiveContainer height={400}>
        <BarChart
          // height={400}
          // width={700}
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid stroke='#ccc' strokeDasharray='3 5' />
          <XAxis
            dataKey='page'
            label={{
              value: 'Page',
              position: 'bottom',
            }}
            // interval={0}
          />
          <YAxis
            padding={{ top: 20 }}
            tickSize={6}
            label={{
              value: 'Duration (ms)',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip
            offset={10}
            wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}
            formatter={(val) => val + 'ms'}
          />
          <Bar
            name='Duration'
            radius={[8, 8, 8, 8]}
            dataKey='ms_avg'
            barSize={50}
            fill='#2a9d8f'
            animationBegin={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
