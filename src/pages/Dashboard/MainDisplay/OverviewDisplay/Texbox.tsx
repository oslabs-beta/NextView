import Box from '../../../../components/Box';
import { v4 as uuidv4 } from 'uuid';

interface TextboxProps {
  traceCount: number;
  overallAvg: number;
}

const Textbox: React.FC<TextboxProps> = ({ traceCount, overallAvg }) => {
  const boxData = [
    { title: 'Average Page Load Duration', data: overallAvg },
    { title: 'Total No. of Traces', data: traceCount },
  ];
  return (
    <div className='col-span-12 flex flex-row justify-center gap-8 text-center font-semibold 3xl:col-span-2 3xl:flex-col'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

export default Textbox;
