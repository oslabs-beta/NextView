import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';
import SpanLineChart from './SpanLineChart';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../../../contexts/dashboardContexts';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../../../../components/Spinner';

const PageDisplay = ({ overviewData }) => {
  const { id } = useParams();
  const { pageData, setPageData, apiKey, start, end, page, setPage } =
    useContext(PageContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    const pageId = id;

    for (let i = 0; i < overviewData.pages.length; i++) {
      if (overviewData.pages[i]._id == pageId) {
        setPage(overviewData.pages[i]);
        break;
      }
    }

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
        setLoading(false);
      } catch (error: unknown) {
        console.log('Data fetching failed', error);
      }
    };
    if (apiKey) fetchPageData();
  }, [id, start, end]);

  return loading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className='relative min-h-screen overflow-y-auto'>
      <div className='absolute flex min-h-full w-full flex-col items-center justify-evenly gap-10 pt-3 sm:pl-8 sm:pr-8'>
        <div className='grid w-full grid-cols-12 items-center gap-10'>
          <Textbox
            overallAvg={pageData.overallAvg}
            traceCount={pageData.traceCount}
            key={uuidv4()}
          />
          <div className='text-md col-span-12 xl:col-span-8'>
            <p className='mb-2 font-semibold'>Request Summary</p>
            <Table overallPageData={pageData.overallPageData} key={1} />
          </div>
        </div>
        <div className='col-span-12 flex w-full flex-wrap justify-between gap-10'>
          <div className='relative flex w-full flex-col items-center justify-evenly rounded-xl bg-white p-5 drop-shadow'>
            <PageLineChart
              avgPageDurationsOverTime={pageData.avgPageDurationsOverTime}
              key={uuidv4()}
            />
          </div>
          <div className='mb-32 flex w-full flex-col items-center rounded-xl bg-white p-5 drop-shadow'>
            <SpanLineChart
              avgActionDurationsOverTime={pageData.avgActionDurationsOverTime}
              key={uuidv4()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDisplay;
