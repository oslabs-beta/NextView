interface BoxProps {
  title: string;
  data: number;
}

const Box = ({ title, data }: BoxProps) => {
  return (
    <div className='flex h-32 w-40 flex-col justify-evenly rounded-2xl bg-white p-5 drop-shadow sm:w-60'>
      <span className='textTitle'>{title}</span>
      {data && title === 'Average Page Load Duration' ? (
        <span className='textData'>{data}ms</span>
      ) : (
        <span className='textData'>{data}</span>
      )}
    </div>
  );
};

export default Box;
