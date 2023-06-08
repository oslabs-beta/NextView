import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';
import {
  PeriodContext,
  TextboxContext,
  BarGraphContext,
  LineChartContext,
  PieChartContext,
  TraceTextboxContext,
  DurationTextboxContext,
} from './Contexts';

// interface Period {
//   interval: number;
//   unit: string;
// }

// interface PeriodContextType {
//   period: Period;
//   setPeriod: (period: number) => number
// }

// interface TextBox {
//   overallAvg: number;
//   traceCount: number;
// }

interface LineDataItem {
  period: string;
  client: number;
  server: number;
  internal: number;
}

interface BarDataItem {
  page: string;
  ms_avg: number;
}

interface PieDataItem {
  kind_id: number;
  kind: string;
  ms_avg: number;
}

const Dashboard = () => {
  const [period, setPeriod] = useState({ interval: 24, unit: 'h' });
  // const [textboxData, setTextboxData] = useState<TextBox | null>(null);
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
        console.log(data);
        setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('barData', barData);
    console.log('lineData', lineData);
    console.log('pieData', pieData);
  });

  if (!isLoading) {
    return (
      <TraceTextboxContext.Provider value={traceCount}>
        <DurationTextboxContext.Provider value={overallAvgDuration}>
          <PeriodContext.Provider value={period}>
            <BarGraphContext.Provider value={barData}>
              <LineChartContext.Provider value={lineData}>
                <PieChartContext.Provider value={pieData}>
                  <div className='flex h-screen w-screen flex-row bg-neutral-200'>
                    <Sidebar />
                    <div className='flex-1'>
                      <MainDisplay />
                    </div>
                  </div>
                </PieChartContext.Provider>
              </LineChartContext.Provider>
            </BarGraphContext.Provider>
          </PeriodContext.Provider>
        </DurationTextboxContext.Provider>
      </TraceTextboxContext.Provider>
    );
  }
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default Dashboard;
