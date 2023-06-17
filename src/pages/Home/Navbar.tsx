import logo from '../../assets/logo2.png';
import githubLogo from '../../assets/github-mark.svg';
import { Link } from 'react-router-dom';
import AuthContainer from './Auth/AuthContainer';

const Navbar = () => {
  return (
    <div className='header relative z-50 mx-auto my-2 flex h-12 flex-row justify-between'>
      <div
        id='header-left'
        className='mx-3 flex flex-row items-center justify-evenly text-sm'
      >
        <Link to={'/'} className='min-w-max'>
          <img src={logo} alt='nextview-logo' className='h-12 w-full'></img>
        </Link>
        <div className='m-2 hidden md:block'>
          <Link
            to={'/'}
            className='px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>Installation</span>
          </Link>
        </div>
        <div className='m-2 hidden md:block'>
          <Link
            to={'/'}
            className='px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>About</span>
          </Link>
        </div>
        <div className='m-2 hidden md:block'>
          <Link
            to={'/'}
            className='px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>Blog</span>
          </Link>
        </div>
        <div className='m-2 hidden md:block'>
          <a
            href='https://github.com/oslabs-beta/NextView'
            target='_blank'
            rel='noopener'
            aria-label='Github'
          >
            <img
              src={githubLogo}
              alt='nextview-logo'
              className='h-6 min-w-max transition duration-200 hover:scale-125'
            ></img>
          </a>
        </div>
      </div>
      <div id='header-right' className='flex flex-row-reverse items-center'>
        <div className='mx-3'>
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
