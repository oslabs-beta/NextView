import Textbox from './Textbox';
import Table from './Table';

const PageDisplay = () => {
  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox />
        </BoxWrapper>
        <BoxWrapper>
          <Table />
        </BoxWrapper>
      </div>
      <div>Line Chart Here</div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default PageDisplay;
