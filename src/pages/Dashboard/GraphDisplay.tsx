import Textbox from './Texbox';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const GraphDisplay = () => {
  return (
    <div className='w-10/12'>
      <div className='flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox />
        </BoxWrapper>
        <BoxWrapper>
          <PieChart />
        </BoxWrapper>
        <BoxWrapper>
          <BarGraph />
        </BoxWrapper>
      </div>
      <div className='flex w-full flex-row gap-4'>
        <LineChart />
      </div>
    </div>
  );
};

function BoxWrapper({ children }) {
  return <div className='flex items-center bg-neutral-400'>{children}</div>;
}

export default GraphDisplay;
