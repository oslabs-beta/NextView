import Topbar from './Topbar';
import AppsListDisplay from './AppsListDisplay/AppsListDisplay';
import SettingsDisplay from './SettingsDisplay/SettingsDisplay';
import DataDisplay from './DataDisplay/DataDisplay';

//TODO: add routing condition
const MainDisplay = () => {
  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar />
      <AppsListDisplay />
      <SettingsDisplay />
      <DataDisplay />
    </div>
  );
};

export default MainDisplay;
