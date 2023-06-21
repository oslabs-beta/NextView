import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';

const Sidebar = ({ overviewData }) => {
  return (
    <div className='relative col-span-2 hidden sm:flex'>
      <SideNavbar />
      <MainNavbar overviewData={overviewData} />
    </div>
  );
};

export default Sidebar;
