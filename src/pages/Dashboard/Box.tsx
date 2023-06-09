interface BoxProps {
  title: string;
  data: number;
}

//TODO:styling

const Box = ({ title, data }: BoxProps) => {
  return (
    <div className='textbox flex h-32  flex-col justify-evenly rounded-3xl bg-neutral-300 p-5 shadow-md'>
      <span className='textTitle'>{title}</span>
      <span className='textData'>{data}</span>
    </div>
  );
};

export default Box;
