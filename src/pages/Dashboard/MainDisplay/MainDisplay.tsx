import { useState, useContext } from 'react';
import Topbar from './Topbar';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import { PageContext } from '../../../contexts/dashboardContexts';
import PageDisplay from './PageDisplay/PageDisplay';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
// import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
// import SettingsDisplay from './SettingsDisplay/SettingsDisplay';

const MainDisplay = ({ overviewData, pageData, setStart, setEnd }) => {
  const { pageView } = useContext(PageContext);

  // TODO: dynamically display pages
  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar setStart={setStart} setEnd={setEnd} />
      <Routes>
        <Route
          path='/'
          element={<OverviewDisplay overviewData={overviewData} />}
        />
        <Route path='page/:id' element={<PageDisplay pageData={pageData} />} />
        <Route path='/page/:id/*' element={<NotFound />} />
      </Routes>
      {/* {pageView ? (
        <PageDisplay pageData={pageData} />
      ) : (
        <OverviewDisplay overviewData={overviewData} />
      )} */}
    </div>
  );
};

export default MainDisplay;
