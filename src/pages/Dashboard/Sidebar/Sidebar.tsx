import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';
import { OverviewDataType } from '../../../types/ComponentPropTypes';
interface SidebarProps {
  overviewData: OverviewDataType;
}

const Sidebar: React.FC<SidebarProps> = ({ overviewData }) => {
  return (
    <div className='relative col-span-2 hidden sm:flex'>
      <SideNavbar />
      <MainNavbar overviewData={overviewData} />
    </div>
  );
};

export default Sidebar;
