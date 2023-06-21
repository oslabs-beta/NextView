import Textbox from './Texbox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';

const OverviewDisplay = ({ overviewData }) => {
  return (
    <div className='relative min-h-screen overflow-y-auto '>
      <div className='absolute flex w-full flex-col items-center gap-5 pt-3 sm:pl-8 sm:pr-8'>
        <div className='grid w-full grid-cols-12 gap-2 sm:gap-10'>
          <Textbox
            traceCount={overviewData.traceCount}
            overallAvg={overviewData.overallAvg}
          />
          <div className='col-span-12 flex flex-col items-center rounded-2xl bg-white p-5 drop-shadow lg:col-span-6 3xl:col-span-5'>
            <HorizontalBarGraph data={overviewData.kindAvgDurations} />
          </div>
          <div className='col-span-12 flex flex-col items-center rounded-2xl bg-white p-5 drop-shadow lg:col-span-6 3xl:col-span-5'>
            <BarGraph data={overviewData.pageAvgDurations} />
          </div>
        </div>
        <div className='mb-32 w-full rounded-2xl bg-white p-5 drop-shadow'>
          <LineChart data={overviewData.kindAvgDurationsOverTime} />
        </div>
      </div>
    </div>
  );
};

export default OverviewDisplay;
