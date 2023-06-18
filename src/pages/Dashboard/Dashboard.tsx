import { useEffect, useState, useContext } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import {
  StartContext,
  EndContext,
  APIContext,
  PageContext,
} from '../../contexts/dashboardContexts';
import dayjs, { Dayjs } from 'dayjs';

const Dashboard = () => {
  const [start, setStart] = useState(dayjs().subtract(1, 'day').toISOString());
  const [end, setEnd] = useState(dayjs().toISOString());
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [page, setPage] = useState('overview');
  const [pageList, setPageList] = useState(null);
  const { apiKey, setApiKey } = useContext(APIContext);
  const [appList, setAppList] = useState(null);

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
        setData(data);
        // console.log(data.pages);
        setPageList(data.pages);
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

  useEffect(() => {
    const pageId = page['_id'];
    // console.log('pageID', pageId);
    console.log('fetched page data');
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

  // useEffect(() => {
  //   // console.log('barData', barData);
  //   // console.log('lineData', lineData);
  //   // console.log('pieData', pieData);
  //   //   console.log('data', data)
  //   console.log(page);
  // });

  console.log({ start, end, data, pageData, page, pageList, apiKey, appList });

  return (
    <>
      {!isLoading ? (
        <StartContext.Provider value={{ start, setStart }}>
          <EndContext.Provider value={{ end, setEnd }}>
            <PageContext.Provider value={{ page, setPage }}>
              <div className='flex w-full bg-neutral-200'>
                <Sidebar />
                <MainDisplay data={data} pageData={pageData} />
              </div>
            </PageContext.Provider>
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
