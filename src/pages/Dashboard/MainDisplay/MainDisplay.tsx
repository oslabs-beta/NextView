import Topbar from './Topbar';
import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import DataDisplay from './DataDisplay/DataDisplay';
import { useState } from 'react';

const MainDisplay = () => {
  //TODO: replace with useContext
  const [appsList, setAppsList] = useState(['app1']); // change to [] to display AppsListDisplay

  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar />
      {!appsList.length ? <AppsListDisplay /> : <DataDisplay />}
    </div>
  );
};

export default MainDisplay;
