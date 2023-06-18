import { useEffect, useState, useContext } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import { APIContext, PageContext } from '../../contexts/dashboardContexts';
import dayjs, { Dayjs } from 'dayjs';

const Dashboard = () => {
  // console.log('rendered');
  const [start, setStart] = useState(dayjs().subtract(1, 'day').toISOString());
  const [end, setEnd] = useState(dayjs().toISOString());
  const [isLoading, setIsLoading] = useState(true);
  const [overviewData, setOverviewData] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [page, setPage] = useState('overview');
  // const [pageList, setPageList] = useState(null);
  const { apiKey, setApiKey } = useContext(APIContext);
  const [appList, setAppList] = useState(null);
  const [pageView, setPageView] = useState(false);
  // const [test, setTest] = useState('dashboard');
  // console.log(test, 'dashboard');

  // fetch apps list and api key
  useEffect(() => {
    const fetchAppsList = async () => {
      try {
        if (!apiKey) {
          const response = await fetch('/apps');
          const data = await response.json();
          setAppList(data);
          // selected this page because it contains good data to visualize
          setApiKey(data[2]['id']);
        }
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchAppsList();
  });

  // fetch overview data
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
        // console.log({'data.pages': data.pages, data: data});
        setOverviewData(data);
        // console.log(data.pages);
        // setPageList(data.pages);
        // selected last page because first one had no data
        setPage(data.pages[6]);
        console.log('data.pages[6]', data.pages[6]);
        setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchOverviewData();
  }, [start, end, apiKey]);

  // fetch page data
  useEffect(() => {
    const pageId = page['_id'];
    // console.log('pageID', pageId);
    // console.log('fetched page data');
    const fetchPageData = async () => {
      try {
        console.log(
          `/apps/${apiKey}/pages/${pageId}/data?start=${start}&end=${end}`,
        );
        const response = await fetch(
          `/apps/${apiKey}/pages/${pageId}/data?start=${start}&end=${end}`,
          {
            headers: {
              'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
          },
        );
        const data = await response.json();
        setPageData(data);
        // console.log('fetched page data', data);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchPageData();
  }, [page]);

  // console.log({ start, end, overviewData, pageData, page, apiKey, appList });

  return (
    <>
      {!isLoading ? (
        <PageContext.Provider value={{ page, setPage, pageView, setPageView }}>
          <div className='flex w-full bg-neutral-200'>
            <Sidebar />
            <MainDisplay
              overviewData={overviewData}
              pageData={pageData}
              setStart={setStart}
              setEnd={setEnd}
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
