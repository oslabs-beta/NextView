interface BoxProps {
  title: string;
  data: number;
}

const Box = ({ title, data }: BoxProps) => {
  return (
    <div className='textbox flex h-32 min-w-min flex-col justify-evenly rounded-2xl bg-white p-5 drop-shadow'>
      <span className='textTitle'>{title}</span>
      <span className='textData'>{data}</span>
    </div>
  );
};

export default Box;
