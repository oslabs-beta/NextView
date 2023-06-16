// import React from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsSharp, IoInvertModeSharp, IoLogOut } from 'react-icons/io5';
import { SiCodereview } from 'react-icons/si';
import { MdDashboardCustomize } from 'react-icons/md';

// TODO: update links to icons
function SideNavBar() {
  return (
    <div className='m-0 flex h-screen w-14 flex-col items-center bg-slate-800 p-5 text-white'>
      <Link to='/overviewpage'>
        <SideNavBarIcon icon={<SiCodereview size='28' />} />
      </Link>
      <Link to='/appslist'>
        <SideNavBarIcon icon={<MdDashboardCustomize size='28' />} />
      </Link>
      <Link to='/settings'>
        <SideNavBarIcon icon={<IoSettingsSharp size='28' />} />
      </Link>
      <Link to='/logout'>
        <SideNavBarIcon icon={<IoLogOut size='28' />} />
      </Link>
      <Link to='/darkmode'>
        <SideNavBarIcon icon={<IoInvertModeSharp size='28' />} />
      </Link>
    </div>
  );
}

const SideNavBarIcon = ({ icon }: { icon: React.ReactElement }) => (
  <div className='sideNavBar-icon'>{icon}</div>
);

export default SideNavBar;

// Sidebar:
{
  /* <div className='fixed left-0 top-0 m-0 flex h-screen w-14 flex-col items-center bg-slate-800 p-5 text-white shadow-lg'></div> */
}
