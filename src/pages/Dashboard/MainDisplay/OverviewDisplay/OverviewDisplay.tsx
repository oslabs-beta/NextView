import Textbox from './Texbox';
import HorizontalBarGragh from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ data }) => {
  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox traceCount={data.traceCount} overallAvg={data.overallAvg} />
        </BoxWrapper>
        <BoxWrapper>
          <HorizontalBarGragh data={data.kindAvgDurations} />
        </BoxWrapper>
        <BoxWrapper>
          <BarGraph data={data.pageAvgDurations} />
        </BoxWrapper>
      </div>
      <div>
        <LineChart data={data.kindAvgDurationsOverTime} />
      </div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default OverviewDisplay;
