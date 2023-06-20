import Textbox from './Texbox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ overviewData }) => {
  return (
    <div className='col-span-full flex flex-1 flex-col overflow-y-auto p-5'>
      <div className='m-1 grid grid-cols-12 justify-center'>
        {/* <BoxWrapper> */}
        <Textbox
          traceCount={overviewData.traceCount}
          overallAvg={overviewData.overallAvg}
        />
        {/* </BoxWrapper> */}
        {/* <BoxWrapper> */}
        <HorizontalBarGraph data={overviewData.kindAvgDurations} />
        {/* </BoxWrapper> */}
        {/* <BoxWrapper> */}
        <BarGraph data={overviewData.pageAvgDurations} />
        {/* </BoxWrapper> */}
      </div>
      <div className='w-fit'>
        <LineChart data={overviewData.kindAvgDurationsOverTime} />
      </div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default OverviewDisplay;
