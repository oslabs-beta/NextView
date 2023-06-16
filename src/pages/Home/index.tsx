//TODO: replace useState with useContext
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/logo2.png';
import githubLogo from '../../assets/github-mark.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  // hard coded for dev, to delete
  const [loggedIn, setLoggedIn] = useState(false); // change to true to redirect to dashboard
  const [appsList, setAppsList] = useState(['app1']);

  return (
    //TODO: add routing logic to AppsList when loggedIn && !appsList.length

    loggedIn && appsList.length ? (
      <Navigate to='/dashboard' />
    ) : (
      <>
        <div className='header relative z-50 flex h-12 flex-row justify-between '>
          <div
            id='header-left'
            className='mx-3 flex flex-row items-center justify-evenly text-sm'
          >
            <Link to={'/'}>
              <img src={logo} alt='nextview-logo' className='h-12 w-12'></img>
            </Link>
            <div className='m-2'>
              <Link
                to={'/'}
                className='font-semibold text-gray-500 hover:text-gray-800'
              >
                <span>Installation</span>
              </Link>
            </div>
            <div className='m-2'>
              <Link
                to={'/'}
                className='font-semibold text-gray-500 hover:text-gray-800'
              >
                <span>About</span>
              </Link>
            </div>
            <div className='m-2'>
              <Link
                to={'/'}
                className='font-semibold text-gray-500 hover:text-gray-800'
              >
                <span>Blog</span>
              </Link>
            </div>
            <div className='m-2'>
              <a
                href='https://github.com/oslabs-beta/NextView'
                target='_blank'
                rel='noopener'
                aria-label='Github'
              >
                <img
                  src={githubLogo}
                  alt='nextview-logo'
                  className='h-6 w-6 transition duration-200 hover:scale-125'
                ></img>
              </a>
            </div>
          </div>
          <div id='header-right' className='flex flex-row-reverse items-center'>
            <div className='mx-3'>
              <Button onClick={() => null}>
                <span>Sign In</span>
              </Button>
              <Button variant='primary' onClick={() => null}>
                <span>Sign Up</span>
              </Button>
            </div>
          </div>
        </div>
        <main className='flex h-screen flex-col overflow-x-hidden overflow-y-scroll'>
          <h1>Home</h1>
        </main>
      </>
    )
  );
};

export default Home;
