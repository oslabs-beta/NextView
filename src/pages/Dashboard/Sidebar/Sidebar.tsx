import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';

const Sidebar = ({ page, setPage }) => {
  return (
    <div className='flex'>
      <SideNavbar />
      <MainNavbar page={page} setPage={setPage} />
    </div>
  );
};

export default Sidebar;
