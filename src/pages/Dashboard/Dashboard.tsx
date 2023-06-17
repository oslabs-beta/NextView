import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import {
  StartContext,
  EndContext,
  OverviewDataContext,
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
  // const [period, setPeriod] = useState({ interval: 24, unit: 'h' });
  // const [traceCount, setTraceCount] = useState(0);
  // const [overallAvgDuration, setOverallAvgDuration] = useState(0);
  // const [barData, setBarData] = useState<BarDataItem[] | null>(null);
  // const [lineData, setLineData] = useState<LineDataItem[] | null>(null);
  // const [pieData, setPieData] = useState<PieDataItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  // const [overviewData, setOverviewData] = useState(null);

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
        // setTraceCount(data.traceCount);
        // setOverallAvgDuration(data.overallAvg);
        // setBarData(data.pageAvgDurations);
        // setPieData(data.kindAvgDurations);
        // console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchData();
  }, [start, end]);

  // useEffect(() => {
  // console.log('barData', barData);
  // console.log('lineData', lineData);
  // console.log('pieData', pieData);
  //   console.log('data', data)
  // });

  return (
    <>
      {!isLoading ? (
        <StartContext.Provider value={{ start, setStart }}>
          <EndContext.Provider value={{ end, setEnd }}>
            <OverviewDataContext.Provider value={data}>
              <div className='flex w-full bg-neutral-200'>
                <Sidebar />
                <MainDisplay data={data} />
              </div>
            </OverviewDataContext.Provider>
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
