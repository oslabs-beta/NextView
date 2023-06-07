const data1 = 12345;
const data2 = 12345;

// if data1 == undefined ? '-' : data1
// if data2 === undefined ? '-' : data2

const Textbox = () => {
  return (
    <div className='flex-1 gap-8'>
      <div className='mt-5 flex h-32 w-40 flex-col justify-center rounded-3xl bg-neutral-300 p-5 shadow-md'>
        <span className='textTitle'>Average Page Load Duration</span>
        <span className='textData'> {data1} </span>
      </div>
      <div className='mt-10 flex h-32 w-40 flex-col justify-center rounded-3xl bg-neutral-300 p-5 shadow-md'>
        <span className='textTitle'>No.of Traces</span>
        <span className='textData'> {data2} </span>
      </div>
    </div>
  );
};

export default Textbox;
