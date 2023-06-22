import { useEffect, useState, useContext } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import { APIContext, PageContext } from '../../contexts/dashboardContexts';
import dayjs from 'dayjs';

const Dashboard = () => {
  // values used in fetch requests, setters used in topbar
  // initialized to the last 24 hrs
  const [start, setStart] = useState(dayjs().subtract(1, 'day').toISOString());
  const [end, setEnd] = useState(dayjs().toISOString());

  // set in dashboard
  const [overviewData, setOverviewData] = useState(null);

  // set in pageDisplay
  const [pageData, setPageData] = useState(null);

  // initialized to null in context, set to user key by fetchAppsList()
  const { apiKey, setApiKey } = useContext(APIContext);

  // currently set by sidebar button, accessed by context
  const [page, setPage] = useState();

  // fetch apps list and api key
  // will not run after api key is set
  useEffect(() => {
    const fetchAppsList = async () => {
      try {
        const response = await fetch('/apps');
        const data = await response.json();
        setApiKey(data[0]['id']);
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
        setOverviewData(data);
        setPage();
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchOverviewData();
  }, [start, end, apiKey]);

  return (
    <>
      {overviewData ? (
        <PageContext.Provider
          value={{ page, setPage, start, end, apiKey, setPageData, pageData }}
        >
          <div className='relative flex w-full bg-[#f6f8fa]'>
            <Sidebar overviewData={overviewData} />
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
