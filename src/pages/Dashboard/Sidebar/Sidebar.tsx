import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';

const Sidebar = ({ overviewData }) => {
  return (
    <div className='flex'>
      <SideNavbar />
      <MainNavbar overviewData={overviewData} />
    </div>
  );
};

export default Sidebar;
