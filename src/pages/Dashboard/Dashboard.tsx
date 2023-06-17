import { useEffect, useState } from 'react';
import MainDisplay from './MainDisplay/MainDisplay';
import Sidebar from './Sidebar/Sidebar';
import Loading from './Loading';
import {
  StartContext,
  EndContext,
  OverviewDataContext,
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
  const [apiKey, setApiKey] = useState('5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d');

  useEffect(() => {
    const fetchData = async () => {
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
        setData(data);
        setPageList(data.pages);
        setPage(data.pages[0]);
        // console.log({pageList: pageList[0]['_id']})
        // setPage(pageList[0]);
        setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchData();
  }, [start, end]);

  useEffect(() => {
    // console.log(data);
    const pageId = page['_id'];
    console.log(pageId);
    const fetchData = async () => {
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
        console.log('fetched', data);
        setPageData(data);
        // setData(data);
        // setPageList(data.pages);
        // setPage(data.pages[0])
        // // console.log({pageList: pageList[0]['_id']})
        // // setPage(pageList[0]);
        // setIsLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    fetchData();
  }, [page]);

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
            {/* <OverviewDataContext.Provider value={data}> */}
            <div className='flex w-full bg-neutral-200'>
              <Sidebar setPage={setPage} />
              <MainDisplay data={data} />
            </div>
            {/* </OverviewDataContext.Provider> */}
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
