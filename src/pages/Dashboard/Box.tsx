interface BoxProps {
  title: string;
  data: number;
}
const Box = ({ title, data }: BoxProps) => {
  return (
    <div className='textbox'>
      <span className='textTitle'>{title}</span>
      <span className='textData'>{data}</span>
    </div>
  );
};

export default Box;
