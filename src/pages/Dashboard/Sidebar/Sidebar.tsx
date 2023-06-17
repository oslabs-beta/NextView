import MainNavbar from './MainNavbar';
import SideNavbar from './SideNavbar';

const Sidebar = ({ setPage }) => {
  return (
    <div className='flex'>
      <SideNavbar />
      <MainNavbar setPage={setPage} />
    </div>
  );
};

export default Sidebar;
