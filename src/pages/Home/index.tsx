//TODO: replace useState with useContext
import { useCallback, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import { UserContext } from '../../contexts/userContexts';
import Features from './Features';
import { NPMCopyInput } from '../../components/NPMCopyInput';

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
        <section className='px-[max((100vw-1500px)/2,48px)] pb-16 pt-20'>
          <div className=''>
            <h3 className='mb-3 text-2xl font-bold'>Installation</h3>
            <div className='grid grid-cols-12 pb-9'>
              <ol className='col-span-6 text-sm'>
                <li>
                  <span>To get started, install our npm package:</span>
                  <div className='my-3'>
                    <NPMCopyInput />
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <footer className='pb-16'>Footer</footer>
      </main>
    </>
  );
};

export default Home;
