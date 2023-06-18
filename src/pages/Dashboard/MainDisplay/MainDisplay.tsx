import { useState, useContext } from 'react';
import Topbar from './Topbar';
// import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import { PageContext } from '../../../contexts/dashboardContexts';

//TODO: add logic to display PageDisplay & SettingsDisplay
import PageDisplay from './PageDisplay/PageDisplay';
// import SettingsDisplay from './SettingsDisplay/SettingsDisplay';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Home';

const MainDisplay = ({ overviewData, pageData, setStart, setEnd }) => {
  //TODO: replace with useContext
  const { pageView } = useContext(PageContext);
  // console.log('pageData-MainDisplay', pageData);
  console.log('pageView', pageView);

  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar setStart={setStart} setEnd={setEnd} />
      <Routes>
        <Route path='/' element={<OverviewDisplay data={data} />} />
        <Route path='/page/:pageId' element={<PageDisplay />} />
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
