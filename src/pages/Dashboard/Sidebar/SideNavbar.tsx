import { Link, useNavigate } from 'react-router-dom';
// import { IoSettingsSharp, IoInvertModeSharp} from 'react-icons/io5';
import { IoLogOut } from 'react-icons/io5';
// import { SiCodereview } from 'react-icons/si';
// import { MdDashboardCustomize } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/userContexts';
// import logo from '../../../assets/NextView-logo-pink-transparent.webp';
import handleLogOutHelper from '../../../../helpers/handleLogOutHelper';

function SideNavBar() {
  const { setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => handleLogOutHelper(setLoggedIn, navigate);

  return (
    <div className='relative m-0 hidden h-screen flex-col items-center bg-white p-5 text-white md:flex'>
      <div className='flex w-12 flex-col'>
        <a href='/' className='transition duration-200 hover:scale-105'>
          <img
            loading='lazy'
            src={
              'https://ik.imagekit.io/4ys419c44/NextView-logo-pink-transparent.webp?updatedAt=1692136903989'
            }
            alt='nextview-logo'
            className='mb-3'
          ></img>
        </a>
        {/* <Link to='/dashboard'>
            <SideNavBarIcon icon={<SiCodereview size='28' color='black' />} />
          </Link> */}
        <a onClick={handleLogOut} className='absolute bottom-0'>
          <SideNavBarIcon icon={<IoLogOut size='28' color='black' />} />
        </a>
      </div>

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
