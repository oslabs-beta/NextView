import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import {
  PeriodContext,
  BarGraphContext,
  LineChartContext,
  PieChartContext,
  TraceTextboxContext,
  DurationTextboxContext,
  LineDataItem,
  BarDataItem,
  PieDataItem,
} from '../../contexts/dashboardContexts';

const Dashboard = () => {
  const [period, setPeriod] = useState({ interval: 24, unit: 'h' });
  const [traceCount, setTraceCount] = useState(0);
  const [overallAvgDuration, setOverallAvgDuration] = useState(0);
  const [barData, setBarData] = useState<BarDataItem[] | undefined>(undefined);
  const [lineData, setLineData] = useState<LineDataItem[] | undefined>(
    undefined,
  );
  const [pieData, setPieData] = useState<PieDataItem[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //add switch statement
      try {
        const response = await fetch(
          `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?interval=${period.interval}&unit=${period.unit}`,
        );
        const data = await response.json();
        // console.log(data);
        // setTextboxData({overallAvg: data.overallAvg, traceCount: data.traceCount});
        setTraceCount(data.traceCount);
        setOverallAvgDuration(data.overallAvg);
        setBarData(data.pageAvgDurations);
        setPieData(data.kindAvgDurations);
        setLineData(data.kindAvgDurationsOverTime);
        // console.log(data);
        setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchData();
  }, [period.interval, period.unit]);

  // useEffect(() => {
  //   console.log('barData', barData);
  //   console.log('lineData', lineData);
  //   console.log('pieData', pieData);
  // });

  return (
    <>
      {!isLoading ? (
        <TraceTextboxContext.Provider value={traceCount}>
          <DurationTextboxContext.Provider value={overallAvgDuration}>
            <PeriodContext.Provider value={{ period, setPeriod }}>
              <BarGraphContext.Provider value={barData}>
                <LineChartContext.Provider value={lineData}>
                  <PieChartContext.Provider value={pieData}>
                    <div className='flex w-full bg-neutral-200'>
                      <Sidebar />
                      <MainDisplay />
                    </div>
                  </PieChartContext.Provider>
                </LineChartContext.Provider>
              </BarGraphContext.Provider>
            </PeriodContext.Provider>
          </DurationTextboxContext.Provider>
        </TraceTextboxContext.Provider>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Dashboard;
