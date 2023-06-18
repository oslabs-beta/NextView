import { useState, useContext } from 'react';
import Topbar from './Topbar';
import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import { PageContext } from '../../../contexts/dashboardContexts';

//TODO: add logic to display PageDisplay & SettingsDisplay
import PageDisplay from './PageDisplay/PageDisplay';
import SettingsDisplay from './SettingsDisplay/SettingsDisplay';

const MainDisplay = ({ data, pageData, setStart, setEnd }) => {
  //TODO: replace with useContext
  const [appsList, setAppsList] = useState(['app1']); // change to useState([]) to display AppsListDisplay
  // console.log('pageData-MainDisplay', pageData);
  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar setStart={setStart} setEnd={setEnd} />
      {!appsList.length ? <AppsListDisplay /> : <OverviewDisplay data={data} />}
      {/* comment out above & uncomment either of below component to render PageDisplay or SettingsDisplay *temp solution */}
      {/* <PageDisplay pageData={pageData}/> */}
      {/* <SettingsDisplay /> */}
    </div>
  );
};

export default MainDisplay;
