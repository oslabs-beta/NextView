import Textbox from './OverviewTextBox';
import HorizontalBarGraph from './HorizontalBarGraph';
import BarGraph from './BarGraph';
import LineChart from './LineChart';
import { useContext, useEffect } from 'react';
import { PageContext } from '../../../../contexts/dashboardContexts';
import { OverviewDataType } from '../../../../types/ComponentPropTypes';

interface OverviewDisplayProps {
  overviewData: OverviewDataType;
}

const OverviewDisplay: React.FC<OverviewDisplayProps> = ({ overviewData }) => {
  const { setPage } = useContext(PageContext);

  // reset page context to undefined on component mount/unmount
  useEffect(() => {
    if (setPage) {
      setPage(undefined);
    }
  }, [setPage]);

  return (
    <div className='relative min-h-screen w-full overflow-auto overflow-y-auto'>
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
        <div className='mb-24 w-full rounded-2xl bg-white p-5 drop-shadow'>
          <LineChart data={overviewData.kindAvgDurationsOverTime} />
        </div>
      </div>
    </div>
  );
};

export default OverviewDisplay;
