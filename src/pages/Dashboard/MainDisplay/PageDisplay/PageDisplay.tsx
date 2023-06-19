import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';
import SpanLineChart from './SpanLineChart';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../../../contexts/dashboardContexts';

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
          // console.log('fetched page data', data);
        } catch (error: unknown) {
          console.log('Data fetching failed', error);
        }
      };
      if (apiKey) fetchPageData();
    }
  }, [apiKey, end, id, loading, setPageData, start]);

  return loading ? (
    <></>
  ) : (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper key={1}>
          <Textbox
            overallAvg={pageData.overallAvg}
            traceCount={pageData.traceCount}
            key={1}
          />
        </BoxWrapper>
        <PageLineChart
          overallPageData={pageData.overallPageData}
          avgPageDurationsOverTime={pageData.avgPageDurationsOverTime}
          key={2}
        />
        <SpanLineChart
          overallPageData={pageData.overallPageData}
          avgActionDurationsOverTime={pageData.avgActionDurationsOverTime}
          key={3}
        />
      </div>
      <BoxWrapper key={4}>
        <Table overallPageData={pageData.overallPageData} key={1} />
      </BoxWrapper>
    </div>
  );
};

// multiple line chart:

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default PageDisplay;
