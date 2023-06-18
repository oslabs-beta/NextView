import { useEffect } from 'react';
import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';

const PageDisplay = () => {
  // useEffect(() => {
  //   const pageId = page['_id'];
  //   // console.log('pageID', pageId);
  //   console.log("fetched page data");
  //   const fetchPageData = async () => {
  //     try {
  //       const response = await fetch(
  //         `/apps/${apiKey}/pages/${pageId}/data?start=${start}&end=${end}`,
  //         {
  //           headers: {
  //             'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
  //           },
  //         },
  //       );
  //       const data = await response.json();
  //       setPageData(data);
  //       // console.log('fetched page data', data);
  //     } catch (error: unknown) {
  //       console.log('Data fetching failed', error);
  //     }
  //   };
  //   if (apiKey) fetchPageData();
  // }, [page]);

  console.log('page display');

  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <h1>Page Display</h1>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox />
        </BoxWrapper>
        <BoxWrapper>
          <Table />
        </BoxWrapper>
        <BoxWrapper></BoxWrapper>
      </div>
      <div>
        Line Chart Here
        <PageLineChart />
      </div>
    </div>
  );
};

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default PageDisplay;
