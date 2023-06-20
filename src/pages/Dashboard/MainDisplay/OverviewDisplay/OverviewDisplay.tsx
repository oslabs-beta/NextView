import Textbox from './Texbox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ overviewData }) => {
  return (
    <div className='relative min-h-full overflow-y-auto'>
      <div className='absolute flex w-full flex-col items-center gap-5'>
        <div className='m-5 grid grid-cols-12 gap-10'>
          <Textbox
            traceCount={overviewData.traceCount}
            overallAvg={overviewData.overallAvg}
          />
          <div className='col-span-full flex flex-col items-center rounded-2xl bg-white p-5 drop-shadow lg:col-span-6 2xl:col-span-5'>
            <HorizontalBarGraph data={overviewData.kindAvgDurations} />
          </div>
          <div className='col-span-full flex flex-col items-center rounded-2xl bg-white p-5 drop-shadow lg:col-span-6 2xl:col-span-5'>
            <BarGraph data={overviewData.pageAvgDurations} />
          </div>
        </div>
        <div className='mb-32 w-11/12 rounded-2xl bg-white p-5 drop-shadow lg:col-span-6 2xl:col-span-5'>
          <LineChart data={overviewData.kindAvgDurationsOverTime} />
        </div>
      </div>
    </div>
  );
};

export default OverviewDisplay;
