//TODO: replace useState with useContext
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Overview from './Overview';
import Feature from '../../components/Feature';
import { UserContext } from '../../contexts/userContexts';

const Home = () => {
  const { loggedIn, setLoggedIn, username, setUsername } =
    useContext(UserContext);
  const checkLogin = () => {
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
  };

  useEffect(checkLogin);

  return (
    <>
      <Navbar />
      <main className='flex h-screen flex-col overflow-x-hidden overflow-y-scroll'>
        <Overview />
        <section className='bg-primary'>
          <div className='grid grid-cols-12'>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
            <Feature>
              <h2>Feature 1</h2>
            </Feature>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
