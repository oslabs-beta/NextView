import Textbox from './Textbox';
import Table from './Table';
import PageLineChart from './PageLineChart';
import SpanLineChart from './SpanLineChart';

const PageDisplay = ({ pageData }) => {
  console.log('pageData-pageDisplay', pageData);

  return (
    <div className='flex h-[calc(100%-64px)] flex-col justify-evenly'>
      <div className='m-1 flex flex-row justify-evenly'>
        <BoxWrapper>
          <Textbox
            overallAvg={pageData.overallAvg}
            traceCount={pageData.traceCount}
          />
        </BoxWrapper>
        <PageLineChart
          overallPageData={pageData.overallPageData}
          avgPageDurationsOverTime={pageData.avgPageDurationsOverTime}
        />
        <SpanLineChart
          overallPageData={pageData.overallPageData}
          avgActionDurationsOverTime={pageData.avgActionDurationsOverTime}
        />
      </div>
      <BoxWrapper>
        <Table overallPageData={pageData.overallPageData} />
      </BoxWrapper>
    </div>
  );
};

// multiple line chart:

function BoxWrapper({ children }: any) {
  return <div className='flex flex-col justify-evenly'>{children}</div>;
}

export default PageDisplay;
