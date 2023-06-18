// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSettingsSharp, IoInvertModeSharp, IoLogOut } from 'react-icons/io5';
import { SiCodereview } from 'react-icons/si';
// import { MdDashboardCustomize } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/userContexts';

function SideNavBar() {
  const { setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch('/user/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => {
        if (res.status === 204) {
          setLoggedIn(false);
          navigate('/');
          window.location.reload();
        } else {
          alert('Logout unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Logout ERROR: ', err));
  };

  return (
    <div className='m-0 flex h-screen w-14 flex-col items-center bg-slate-800 p-5 text-white'>
      <Link to='/dashboard'>
        <SideNavBarIcon icon={<SiCodereview size='28' />} />
      </Link>
      <a onClick={handleLogOut}>
        <SideNavBarIcon icon={<IoLogOut size='28' />} />
      </a>
      {/* stretch features
      <Link to='/dashboard/appslist'>
        <SideNavBarIcon icon={<MdDashboardCustomize size='28' />} />
      </Link>
      <Link to='/dashboard/settings'>
        <SideNavBarIcon icon={<IoSettingsSharp size='28' />} />
      </Link>
      <Link to='/darkmode'>
        <SideNavBarIcon icon={<IoInvertModeSharp size='28' />} />
      </Link> */}
    </div>
  );
}

const SideNavBarIcon = ({ icon }: { icon: React.ReactElement }) => (
  <div className='sideNavBar-icon'>{icon}</div>
);

export default SideNavBar;
