import { useEffect, useState, useContext } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import { APIContext, PageContext } from '../../contexts/dashboardContexts';
import dayjs, { Dayjs } from 'dayjs';

const Dashboard = () => {
  // console.log('rendered');

  // set to false on succesful fetch of overview data
  // const [isLoading, setIsLoading] = useState(true);

  // values used in fetch requests, setters used in topbar
  // initialized to the last 24 hrs
  const [start, setStart] = useState(dayjs().subtract(1, 'day').toISOString());
  const [end, setEnd] = useState(dayjs().toISOString());

  // values set in dashboard
  const [overviewData, setOverviewData] = useState(null);
  const [pageData, setPageData] = useState(null);

  // for sidebar
  // const [pageList, setPageList] = useState(null);

  // initialized to null in context, set to user key by fetchAppsList()
  const { apiKey, setApiKey } = useContext(APIContext);

  // only for apps list page
  const [appList, setAppList] = useState(null);

  // currently set by sidebar button, accessed by context
  const [page, setPage] = useState('overview');

  // only for development
  const [pageView, setPageView] = useState(false);

  // const [test, setTest] = useState('dashboard');
  // console.log(test, 'dashboard');

  // wrapping fetch calls in useEffect reduces unnecessary re-renders. still room for optimization.

  // fetch apps list and api key
  // will not run again after it sets api key
  useEffect(() => {
    const fetchAppsList = async () => {
      try {
        const response = await fetch('/apps');
        const data = await response.json();
        setAppList(data);
        // selected this page because it contains good data to visualize

        // TODO: SET TO LAST VIEWED APP
        setApiKey(data[2]['id']);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (!apiKey) fetchAppsList();
  });

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
        // console.log({'data.pages': data.pages, data: data});
        setOverviewData(data);
        // console.log(data.pages);
        // setPageList(data.pages);

        // TODO: REMOVE SETTER. PAGE TO BE SET IN MAINNAVBAR ONCLICK.
        // selected last page because first one had no data
        setPage(data.pages[0]);
        // console.log('data.pages[6]', data.pages[6]);
        // setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchOverviewData();
  }, [start, end, apiKey]);

  // fetch page data
  // only if user api key is set
  useEffect(() => {
    const pageId = page['_id'];
    // console.log('pageID', pageId);
    // console.log('fetched page data');
    const fetchPageData = async () => {
      try {
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
      {overviewData ? (
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
