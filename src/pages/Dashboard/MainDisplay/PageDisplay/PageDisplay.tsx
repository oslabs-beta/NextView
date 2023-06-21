import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';
import SpanLineChart from './SpanLineChart';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../../../contexts/dashboardContexts';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../../../../components/Spinner';

const PageDisplay = () => {
  const { id } = useParams();
  const { pageData, setPageData, apiKey, start, end } = useContext(PageContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      const pageId = id;
      const fetchPageData = async () => {
        try {
          const response = await fetch(
            `/apps/${apiKey}/pages/${pageId}/data?start=${start}&end=${end}`,
            {
              headers: {
                'User-Timezone':
                  Intl.DateTimeFormat().resolvedOptions().timeZone,
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
    }
  }, [apiKey, end, id, loading, setPageData, start]);

  return loading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className='relative min-h-screen overflow-y-auto p-5'>
      <div className='absolute flex min-h-full w-full flex-col justify-evenly'>
        <div className='col-span-12 mx-5 grid grid-cols-12 items-center gap-5'>
          <Textbox
            overallAvg={pageData.overallAvg}
            traceCount={pageData.traceCount}
            key={uuidv4()}
          />
          <Table overallPageData={pageData.overallPageData} key={1} />
        </div>
        <div className='col-span-12 grid grid-cols-12 gap-10'>
          <PageLineChart
            avgPageDurationsOverTime={pageData.avgPageDurationsOverTime}
            key={uuidv4()}
          />
          <SpanLineChart
            avgActionDurationsOverTime={pageData.avgActionDurationsOverTime}
            key={uuidv4()}
          />
        </div>
      </div>
    </div>
  );
};

export default PageDisplay;
