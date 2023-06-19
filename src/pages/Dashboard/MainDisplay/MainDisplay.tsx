import { useState, useContext } from 'react';
import Topbar from './Topbar';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import { PageContext } from '../../../contexts/dashboardContexts';
import PageDisplay from './PageDisplay/PageDisplay';
import { Routes, Route } from 'react-router-dom';
// import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
// import SettingsDisplay from './SettingsDisplay/SettingsDisplay';

const MainDisplay = ({ overviewData, pageData, setStart, setEnd }) => {
  const { pageView } = useContext(PageContext);
  // console.log('pageData-MainDisplay', pageData);
  console.log('pageView', pageView);
  // TODO: dynamically display pages *TRY: set path='/page/:id' for PageDisplay *see PageTab TODO
  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar setStart={setStart} setEnd={setEnd} />
      <Routes>
        <Route
          path='/'
          element={<OverviewDisplay overviewData={overviewData} />}
        />
        <Route
          path='/page/page=:pageName'
          element={<PageDisplay pageData={pageData} />}
        />
      </Routes>
      {pageView ? (
        <PageDisplay pageData={pageData} />
      ) : (
        <OverviewDisplay overviewData={overviewData} />
      )}
    </div>
  );
};

export default MainDisplay;
