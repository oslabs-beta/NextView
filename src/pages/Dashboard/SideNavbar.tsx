// import React from 'react';
import { Link } from 'react-router-dom';

import {
  IoHome,
  IoPersonSharp,
  IoInvertModeSharp,
  IoLogOut,
} from 'react-icons/io5';

// TODO: update links to icons
function SideNavBar() {
  return (
    <div className='fixed left-0 top-0 m-0 flex h-screen w-14 flex-col items-center bg-slate-800 p-5 text-white shadow-lg'>
      <Link to='/home'>
        <SideNavBarIcon icon={<IoHome size='28' />} />
      </Link>
      <Link to='/userpage'>
        <SideNavBarIcon icon={<IoPersonSharp size='28' />} />
      </Link>
      <Link to='/darkmode'>
        <SideNavBarIcon icon={<IoInvertModeSharp size='28' />} />
      </Link>
      <Link to='/logout'>
        <SideNavBarIcon icon={<IoLogOut size='28' />} />
      </Link>
    </div>
  );
}

const SideNavBarIcon = ({ icon }: { icon: React.ReactElement }) => (
  <div className='sideNavBar-icon'>{icon}</div>
);

export default SideNavBar;
