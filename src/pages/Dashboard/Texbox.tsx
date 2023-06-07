import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

// if data1 == undefined ? '-' : data1
// if data2 === undefined ? '-' : data2
//TODO: update boxData with state
//TODO:styling

const boxData = [
  { title: 'Average Page Load Duration (milliseconds)', data: 3542 },
  { title: 'Total No.of Traces (milliseconds)', data: 352 },
];

const Textbox = () => {
  return (
    <div className='textbox-container'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

export default Textbox;
