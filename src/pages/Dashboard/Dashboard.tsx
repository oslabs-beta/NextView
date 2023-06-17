import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import {
  StartContext,
  EndContext,
  PeriodContext,
  BarGraphContext,
  OVLineChartContext,
  PieChartContext,
  TraceTextboxContext,
  DurationTextboxContext,
  LineDataItem,
  BarDataItem,
  PieDataItem,
} from '../../contexts/dashboardContexts';
import dayjs, { Dayjs } from 'dayjs';
const Dashboard = () => {
  const [start, setStart] = useState(dayjs().subtract(1, 'day').toISOString());
  const [end, setEnd] = useState(dayjs().toISOString());
  // const [start, setStart] = useState<string | null>("2023-06-14T20:48:37.392Z");
  // const [end, setEnd] = useState<string | null>("2023-06-16T20:48:37.392Z");
  const [period, setPeriod] = useState({ interval: 24, unit: 'h' });
  const [traceCount, setTraceCount] = useState(0);
  const [overallAvgDuration, setOverallAvgDuration] = useState(0);
  const [barData, setBarData] = useState<BarDataItem[] | null>(null);
  const [lineData, setLineData] = useState<LineDataItem[] | null>(null);
  const [pieData, setPieData] = useState<PieDataItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //add switch statement
      try {
        // const response = await fetch(
        //   `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?interval=${period.interval}&unit=${period.unit}`,
        // );
        const response = await fetch(
          `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?start=${start}&end=${end}`,
          {
            headers: {
              'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
          },
        );
        const data = await response.json();
        // console.log(data);
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
    // }, [period.interval, period.unit]);
  }, [start, end]);

  useEffect(() => {
    console.log('barData', barData);
    // console.log('lineData', lineData);
    // console.log('pieData', pieData);
  });

  return (
    <>
      {!isLoading ? (
        <StartContext.Provider value={{ start, setStart }}>
          <EndContext.Provider value={{ end, setEnd }}>
            <TraceTextboxContext.Provider value={traceCount}>
              <DurationTextboxContext.Provider value={overallAvgDuration}>
                <BarGraphContext.Provider value={{ barData, setBarData }}>
                  <OVLineChartContext.Provider
                    value={{ lineData, setLineData }}
                  >
                    <PieChartContext.Provider value={{ pieData, setPieData }}>
                      <div className='flex w-full bg-neutral-200'>
                        <Sidebar />
                        <MainDisplay />
                      </div>
                    </PieChartContext.Provider>
                  </OVLineChartContext.Provider>
                </BarGraphContext.Provider>
              </DurationTextboxContext.Provider>
            </TraceTextboxContext.Provider>
          </EndContext.Provider>
        </StartContext.Provider>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Dashboard;
