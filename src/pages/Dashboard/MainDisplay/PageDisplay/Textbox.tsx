import Box from '../../../../components/Box';
import { v4 as uuidv4 } from 'uuid';

const Textbox = ({ traceCount, overallAvg }) => {
  const boxData = [
    { title: 'Average Page Load Duration (ms)', data: overallAvg },
    { title: 'Total No. of Traces', data: traceCount },
  ];

  return (
    <div className='textbox-container flex h-full w-64 flex-col justify-evenly text-center font-semibold'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

export default Textbox;
