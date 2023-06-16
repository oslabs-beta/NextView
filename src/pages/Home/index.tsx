//TODO: replace useState with useContext
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/logo2.png';

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
        <div className='header relative z-50 flex h-12 flex-row justify-between bg-gray-200'>
          <div id='header-left'>
            <a href='/' target='_self'>
              {/* <span> */}
              <img src={logo} alt='nextview-logo' className='h-12 w-12'></img>
              {/* </span> */}
            </a>
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
