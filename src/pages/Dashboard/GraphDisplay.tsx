import Textbox from './Texbox';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const GraphDisplay = () => {
  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
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
      <div>
        <LineChart />
      </div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default GraphDisplay;
