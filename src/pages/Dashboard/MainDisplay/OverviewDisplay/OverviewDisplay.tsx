import Textbox from './Texbox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ overviewData }) => {
  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox
            traceCount={overviewData.traceCount}
            overallAvg={overviewData.overallAvg}
          />
        </BoxWrapper>
        <BoxWrapper>
          <HorizontalBarGraph data={overviewData.kindAvgDurations} />
        </BoxWrapper>
        <BoxWrapper>
          <BarGraph data={overviewData.pageAvgDurations} />
        </BoxWrapper>
      </div>
      <div>
        <LineChart data={overviewData.kindAvgDurationsOverTime} />
      </div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default OverviewDisplay;
