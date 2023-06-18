import { useState } from 'react';
import Topbar from './Topbar';
// import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import PageDisplay from './PageDisplay/PageDisplay';
// import SettingsDisplay from './SettingsDisplay/SettingsDisplay';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Home';

const MainDisplay = ({ data }) => {
  //TODO: replace with useContext
  const [seletedApp, setSeletedApp] = useState('');

  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar />
      <Routes>
        <Route path='/' element={<OverviewDisplay data={data} />} />
        <Route path='/page/:pageId' element={<PageDisplay />} />
      </Routes>
      {!seletedApp ? <OverviewDisplay data={data} /> : <PageDisplay />}
    </div>
  );
};

export default MainDisplay;
