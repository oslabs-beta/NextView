import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import { UserContext } from '../../contexts/userContexts';
import Features from './Features';
import SignupForm from './Auth/SignupForm';
import Modal from './Auth/Modal';
import Installation from './Installation';
import Contributors from './Contributors';

const Home = () => {
  const { setLoggedIn, setUsername } = useContext(UserContext);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const installationRef = useRef<HTMLDivElement>(null);
  const contributorsRef = useRef<HTMLDivElement>(null);
  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    return () => {
      console.log(ref.current);
      if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
    };
  };

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
      <Navbar
        installationScroll={executeScroll(installationRef)}
        contributorsScroll={executeScroll(contributorsRef)}
      />
      <main className='absolute top-16 flex h-screen flex-col overflow-x-hidden overflow-y-scroll'>
        <Overview setOpenSignupModal={setOpenSignupModal} />
        <Features />
        <div ref={installationRef}>
          <Installation setOpenSignupModal={setOpenSignupModal} />
        </div>
        <div ref={contributorsRef}>
          <Contributors />
        </div>
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
