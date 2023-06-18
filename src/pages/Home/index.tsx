//TODO: replace useState with useContext
import { useCallback, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import { UserContext } from '../../contexts/userContexts';
import Features from './Features';

const Home = () => {
  const { setLoggedIn, setUsername } = useContext(UserContext);

  const checkLogin = useCallback(() => {
    fetch('/user/authenticate', {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('HTTP error ' + res.status);
        }
        return res.json();
      })
      .then((res) => {
        if (res.username) {
          setLoggedIn(true);
          setUsername(res.username);
        }
      })
      .catch((err) => console.log('Authenticate: ERROR: ', err));
  }, [setLoggedIn, setUsername]);

  useEffect(() => checkLogin(), [checkLogin]);

  return (
    <>
      <Navbar />
      <main className='flex h-screen flex-col overflow-x-hidden overflow-y-scroll'>
        <Overview />
        <Features />
        <section className=''></section>
      </main>
    </>
  );
};

export default Home;
