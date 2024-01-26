import { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import { APIContext, PageContext } from '../../contexts/dashboardContexts';
import dayjs from 'dayjs';
import {
  OverviewDataType,
  Page,
  PageDataType,
} from '../../types/ComponentPropTypes';

// initialize start and end dates to cover last 24hrs
const initialStart = dayjs().subtract(1, 'day').toISOString();
const initialEnd = dayjs().toISOString();

const Dashboard = () => {
  // state initialization
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  const [page, setPage] = useState<Page | undefined>(undefined);

  const [overviewData, setOverviewData] = useState<OverviewDataType>({
    pages: [],
    overallAvg: 0,
    traceCount: 0,
    pageAvgDurations: [],
    kindAvgDurations: [],
    kindAvgDurationsOverTime: [],
  });

  const [pageData, setPageData] = useState<PageDataType>({
    overallAvg: 0,
    traceCount: 0,
    avgPageDurationsOverTime: [],
    avgActionDurationsOverTime: [],
    overallPageData: [],
  });

  // use apicontext for apikey management
  const { apiKey, setApiKey } = useContext(APIContext);

  // fetch apps list once at the start if apikey not yet set
  useEffect(() => {
    const fetchAppsList = async () => {
      try {
        const response = await fetch('/apps');
        const data = await response.json();
        if (setApiKey) {
          setApiKey(data[0]['id']);
        }
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };

    if (!apiKey) fetchAppsList();
  }, [apiKey, setApiKey]);

  // retrieve overview data when start, end dates, or apikey changes
  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await fetch(
          `/apps/${apiKey}/data?start=${start}&end=${end}`,
          {
            headers: {
              'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
          },
        );
        const data = await response.json();
        setOverviewData(data);
        setPage(undefined);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchOverviewData();
  }, [start, end, apiKey]);

  // usecallback for stable references of functions updating state
  const memoizedSetPageData = useCallback((data: PageDataType) => {
    setPageData(data);
  }, []);

  const memoizedSetStart = useCallback((startValue: string) => {
    setStart(startValue);
  }, []);

  const memoizedSetEnd = useCallback((endValue: string) => {
    setEnd(endValue);
  }, []);

  // usememo for context value to prevent unnecessary renders
  const PageContextValue = useMemo(
    () => ({
      page,
      setPage,
      start,
      setStart,
      end,
      setEnd,
    }),
    [page, setPage, start, setStart, end, setEnd],
  );

  return (
    <>
      {overviewData ? (
        <PageContext.Provider value={PageContextValue}>
          <div className='relative flex w-full bg-[#f6f8fa]'>
            <Sidebar overviewData={overviewData} />
            <MainDisplay
              overviewData={overviewData}
              pageData={pageData}
              setPageData={memoizedSetPageData}
              setStart={memoizedSetStart}
              setEnd={memoizedSetEnd}
            />
          </div>
        </PageContext.Provider>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Dashboard;
