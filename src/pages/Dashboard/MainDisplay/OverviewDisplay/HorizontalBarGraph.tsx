import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const barColors = ['#003f5c', '#bc5090', '#6996e4'];

const HorizontalBarGragh = ({ data }) => {
  return (
    <>
      <p className='absolute left-5 font-bold'>Average Span Duration</p>
      <ResponsiveContainer height={400}>
        <BarChart
          layout='vertical'
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
            dataKey='ms_avg'
            axisLine={true}
            type='number'
            padding={{ right: 30 }}
            label={{
              value: 'Duration',
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
              value: 'Kind',
              angle: -90,
              position: 'insideLeft',
              offset: -10,
            }}
          />
          <Tooltip
            offset={0}
            wrapperStyle={{ width: 180, backgroundColor: '#ccc' }}
            formatter={(val) => val + 'ms'}
          />
          <Bar
            name='Duration'
            radius={[0, 8, 8, 0]}
            dataKey='ms_avg'
            barSize={50}
            animationBegin={5}
          >
            {data &&
              data.map((data, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default HorizontalBarGragh;
