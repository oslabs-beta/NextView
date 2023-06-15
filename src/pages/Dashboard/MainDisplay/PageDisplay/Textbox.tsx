import Box from './Box';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import {
  DurationTextboxContext,
  TraceTextboxContext,
} from '../../../../contexts/dashboardContexts';

const Textbox = () => {
  const traceCount = useContext(TraceTextboxContext);
  const duration = useContext(DurationTextboxContext);

  const boxData = [
    { title: 'Average Page Load Duration (ms)', data: duration },
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
