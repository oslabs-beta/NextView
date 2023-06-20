import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

// if data1 == undefined ? '-' : data1
// if data2 === undefined ? '-' : data2

const Textbox = ({ traceCount, overallAvg }) => {
  const boxData = [
    { title: 'Average Page Load Duration (ms)', data: overallAvg },
    { title: 'Total No. of Traces', data: traceCount },
  ];
  return (
    <div className='flex h-full w-64 flex-col justify-evenly text-center font-semibold'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

{
  /* <div className='flex-1 gap-8'>
      <div className='mt-5 flex h-32 w-40 flex-col justify-center rounded-3xl bg-neutral-300 p-5 shadow-md'>
        <span className='textTitle'>Average Page Load Duration</span>
        <span className='textData'> {data1} </span>
      </div>
      <div className='mt-10 flex h-32 w-40 flex-col justify-center rounded-3xl bg-neutral-300 p-5 shadow-md'>
        <span className='textTitle'>No.of Traces</span>
        <span className='textData'> {data2} </span>
      </div> */
}

export default Textbox;
