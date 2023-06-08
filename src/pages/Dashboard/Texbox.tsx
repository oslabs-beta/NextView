import Box from './Box';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import {
  DurationTextboxContext,
  TextboxContext,
  TraceTextboxContext,
} from './Contexts';

// if data1 == undefined ? '-' : data1
// if data2 === undefined ? '-' : data2
//TODO: update boxData with state
//TODO:styling

const Textbox = () => {
  const traceCount = useContext(TraceTextboxContext);
  const duration = useContext(DurationTextboxContext);

  const boxData = [
    { title: 'Average Page Load Duration (milliseconds)', data: duration },
    { title: 'Total No.of Traces (milliseconds)', data: traceCount },
  ];

  return (
    <div className='textbox-container'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

export default Textbox;
