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

const SpanLineChart = ({ avgActionDurationsOverTime }) => {
  const colors = [
    // '#8884d8',
    // '#82ca9d',
    // '#ff7f50',
    // '#1f77b4',
    // '#ff0000',
    // '#00ff00',
    // '#0000ff',
    // '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#800000',
    '#008000',
    '#000080',
    '#808000',
    '#800080',
    '#008080',
    '#ffa500',
    '#ffc0cb',
    '#ffd700',
    '#ff4500',
  ];

  /*
      #8884d8" - Blue Violet
"#82ca9d" - Sea Green
"#ff7f50" - Coral
"#1f77b4" - Dodger Blue
"#ff0000" - Red
"#00ff00" - Lime
"#0000ff" - Blue
"#ffff00" - Yellow
"#ff00ff" - Magenta
"#00ffff" - Cyan
"#800000" - Maroon
"#008000" - Green
"#000080" - Navy
"#808000" - Olive
"#800080" - Purple
"#008080" - Teal
"#ffa500" - Orange
"#ffc0cb" - Pink
"#ffd700" - Gold
"#ff4500" - Orange Red
      */

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
        Average Request Duration Over Time
      </p>
      <ResponsiveContainer width='95%' height={350}>
        <LineChart
          // width={500}
          // height={300}
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
            label={{ value: 'Duration (ms)', angle: -90, position: 'left' }}
          />
          <Tooltip />
          <Legend />
          {/* <Line
            type='monotone'
            dataKey='Avg. duration (ms)'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          /> */}
          {/* <Line activeDot={{ r: 8 }} key={1} type='monotone' dataKey={actions[0]} stroke='#82ca9d'></Line> */}
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SpanLineChart;
