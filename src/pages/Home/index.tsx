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
        <section className='px-4 pb-16 pt-20 sm:px-[max((100vw-1500px)/2,48px)]'>
          <div className=''>
            <h3 className='mb-3 text-2xl font-bold'>Installation</h3>
            <div className='grid grid-cols-12 pb-9'>
              <ol type='1' className='col-span-8 text-sm leading-6'>
                <li>
                  <p>To get started, install our npm package:</p>
                  <div className='my-3'>
                    <NPMCopyInput />
                  </div>
                </li>
                <li>
                  <p>
                    In your next.config.js file, opt-in to the Next.js
                    instrumentation by providing
                    'experimental.instrumentationHook = true;'
                  </p>
                </li>
                <li>
                  <p>
                    In your ‘.env.local’ file in the root directory (create one
                    if it doesn’t exist), create two environment variables, one
                    for your API Key and one for your service’s name like so:
                  </p>
                </li>
                <li>
                  <p>
                    Start the OpenTelemetry Collector via the Docker Command:
                    docker-compose-up
                  </p>
                </li>
                <li>
                  <p>Log into your account at NextView.dev</p>
                </li>
                <li>
                  <p>
                    Congrats! Now you can see the telemetry data for your
                    Next.js application!
                  </p>
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
