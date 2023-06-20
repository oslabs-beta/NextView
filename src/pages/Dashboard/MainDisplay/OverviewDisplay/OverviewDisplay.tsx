import Textbox from './Texbox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ overviewData }) => {
  return (
    <div className='relative min-h-full overflow-y-auto p-5'>
      <div className='absolute flex w-full flex-col items-center'>
        <div className='grid grid-cols-12 gap-10'>
          <Textbox
            traceCount={overviewData.traceCount}
            overallAvg={overviewData.overallAvg}
          />
          <HorizontalBarGraph data={overviewData.kindAvgDurations} />
          <BarGraph data={overviewData.pageAvgDurations} />
        </div>
        <div className='w-full p-5'>
          <LineChart data={overviewData.kindAvgDurationsOverTime} />
        </div>
      </div>
    </div>
  );
};

export default OverviewDisplay;
