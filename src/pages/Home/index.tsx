import { useCallback, useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import { UserContext } from '../../contexts/userContexts';
import Features from './Features';
import SignupForm from './Auth/SignupForm';
import Modal from './Auth/Modal';
import Installation from './Installation';

const Home = () => {
  const { setLoggedIn, setUsername } = useContext(UserContext);
  const [openSignupModal, setOpenSignupModal] = useState(false);

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
        <Overview setOpenSignupModal={setOpenSignupModal} />
        <Features />
        <Installation setOpenSignupModal={setOpenSignupModal} />
        <footer className='pb-16'>Footer</footer>
        <Modal
          open={openSignupModal}
          onClose={() => {
            setOpenSignupModal(false);
          }}
        >
          <SignupForm />
        </Modal>
      </main>
    </>
  );
};

export default Home;
