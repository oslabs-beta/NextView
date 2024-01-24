import Box from '../../../../components/Box';
import { v4 as uuidv4 } from 'uuid';

interface TextboxProps {
  overallAvg: number;
  traceCount: number;
}

const Textbox: React.FC<TextboxProps> = ({ traceCount, overallAvg }) => {
  const boxData = [
    { title: 'Average Page Load Duration', data: overallAvg },
    { title: 'Total No. of Traces', data: traceCount },
  ];

  return (
    <div className='col-span-12 ml-auto mr-auto flex w-full flex-row justify-center gap-8 text-center font-semibold xl:col-span-4'>
      {boxData.map(({ title, data }) => (
        <Box key={uuidv4()} title={title} data={data} />
      ))}
    </div>
  );
};

export default Textbox;
