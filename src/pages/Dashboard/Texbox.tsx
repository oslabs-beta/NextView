const data1 = 12345;
const data2 = 12345;

// if data1 == undefined ? '-' : data1
// if data2 === undefined ? '-' : data2

const Textbox = () => {
  return (
    <div className='textbox-container'>
      <div className='textbox'>
        <span className='textTitle'>Average Page Load Duration</span>
        <span className='textData'> {data1} </span>
      </div>
      <div className='textbox'>
        <span className='textTitle'>No.of Traces</span>
        <span className='textData'> {data2} </span>
      </div>
    </div>
  );
};

export default Textbox;
