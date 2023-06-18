import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';

const Sidebar = () => {
  return (
    <div className='flex'>
      <SideNavbar />
      <MainNavbar />
    </div>
  );
};

export default Sidebar;
