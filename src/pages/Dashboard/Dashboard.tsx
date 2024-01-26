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

// initialized to the last 24 hrs
const initialStart = dayjs().subtract(1, 'day').toISOString();
const initialEnd = dayjs().toISOString();

const Dashboard = () => {
  // values used in fetch requests, setters used in topbar
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  // currently set by sidebar button, accessed by context
  const [page, setPage] = useState<Page | undefined>(undefined);

  // set in dashboard
  const [overviewData, setOverviewData] = useState<OverviewDataType>({
    pages: [],
    overallAvg: 0,
    traceCount: 0,
    pageAvgDurations: [],
    kindAvgDurations: [],
    kindAvgDurationsOverTime: [],
  });

  // set in pageDisplay
  const [pageData, setPageData] = useState<PageDataType>({
    overallAvg: 0,
    traceCount: 0,
    avgPageDurationsOverTime: [],
    avgActionDurationsOverTime: [],
    overallPageData: [],
  });

  // fallback to an empty object to avoid runtime errors if  context is null
  const { apiKey, setApiKey } = useContext(APIContext);

  // fetch apps list and api key
  // will not run after api key is set
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
    // Fetch the apps list only if apiKey is not yet set (null)
    if (!apiKey) fetchAppsList();
  }, [apiKey, setApiKey]);

  // fetch overview data
  // only if user api key is set
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

  const memoizedSetPageData = useCallback((data: PageDataType) => {
    setPageData(data);
  }, []);

  const memoizedSetStart = useCallback((startValue: string) => {
    setStart(startValue);
  }, []);

  const memoizedSetEnd = useCallback((endValue: string) => {
    setEnd(endValue);
  }, []);

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
