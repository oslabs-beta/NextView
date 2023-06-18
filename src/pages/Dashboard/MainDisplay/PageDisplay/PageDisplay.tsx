import { useEffect } from 'react';
import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';

const PageDisplay = ({ pageData }) => {
  // console.log('pageData-pageDisplay', pageData);
  //
  //   console.log('page display');
  //     useEffect(() => {
  //     // const pageId = page['_id'];
  //     // console.log('pageID', pageId);
  //     console.log("fetched page data");
  //     const fetchPageData = async () => {
  //       try {
  //         const response = await fetch(
  //           '/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/pages/2/data?start=2023-06-11T04:00:00.000Z&end=2023-06-16T04:00:00.000Z',
  //           {
  //             headers: {
  //               'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
  //             },
  //           },
  //         );
  //         const data = await response.json();
  //         // setPageData(data);
  //         // console.log('fetched page data', data);
  //       } catch (error: unknown) {
  //         console.log('Data fetching failed', error);
  //       }
  //     };
  //     // if (apiKey) fetchPageData();
  //     fetchPageData();
  //   // }, [page]);
  // });

  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
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
