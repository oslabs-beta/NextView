import { useState } from 'react';
import Topbar from './Topbar';
import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';

//TODO: add logic to display PageDisplay & SettingsDisplay
import PageDisplay from './PageDisplay/PageDisplay';
import SettingsDisplay from './SettingsDisplay/SettingsDisplay';

const MainDisplay = ({ data }) => {
  //TODO: replace with useContext
  const [appsList, setAppsList] = useState(['app1']); // change to useState([]) to display AppsListDisplay

  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar />
      {!appsList.length ? <AppsListDisplay /> : <OverviewDisplay data={data} />}
      {/* comment out above & uncomment either of below component to render PageDisplay or SettingsDisplay *temp solution */}
      {/* <PageDisplay /> */}
      {/* <SettingsDisplay /> */}
    </div>
  );
};

export default MainDisplay;
