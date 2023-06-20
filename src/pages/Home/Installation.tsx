import { ChangeEvent, useContext } from 'react';
import Button from '../../components/Button';
import { CopyInput } from '../../components/CopyInput';
import { UserContext } from '../../contexts/userContexts';
import { NPMCopyInput } from '../../components/NPMCopyInput';
import { useNavigate } from 'react-router-dom';
import partyPopper from '../../assets/Party_Popper_Emojipedia.png';
import team from '../../assets/team.png';
import npm from '../../assets/npm.png';

interface Props {
  setOpenSignupModal(value: React.SetStateAction<boolean>): void;
}

const Installation: React.FC<Props> = ({ setOpenSignupModal }) => {
  const { loggedIn, setUsername } = useContext(UserContext);
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <section className='px-4 pb-10 pt-20 sm:px-[max((100vw-1500px)/2,48px)]'>
      <div className='relative'>
        <h3 className='mb-3 text-2xl font-bold'>Get Started</h3>
        <div className='grid grid-cols-12 gap-6 pb-9 '>
          <ol className='col-span-12 list-decimal text-sm leading-6 lg:col-span-6 '>
            <li className=''>
              <p>
                To get started, install our npm package in your Next.js
                application:
              </p>

              <div className='my-3 flex items-center'>
                <div className='block px-3'>
                  <a
                    href='https://www.npmjs.com/package/nextview-tracing'
                    target='_blank'
                    rel='noopener'
                    aria-label='npm'
                  >
                    <img
                      src={npm}
                      alt='npm-logo'
                      className='relative top-[1px] h-3 transition duration-200 hover:scale-105'
                    />
                  </a>
                </div>
                <NPMCopyInput />
              </div>
            </li>
            <li>
              <p>
                In your next.config.js file, opt-in to the Next.js
                instrumentation by setting the experimental instrumentationHook
                to true:
              </p>

              <div className='my-3'>
                <CopyInput text='experimental.instrumentationHook = true;'>
                  experimental.instrumentationHook = true;
                </CopyInput>
              </div>
            </li>
            {loggedIn ? (
              <></>
            ) : (
              <li>
                <p>Register a NextView account here:</p>
                <input
                  className='focus:shadow-outline my-3 w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none  sm:w-auto sm:rounded-r-none'
                  id='username'
                  type='text'
                  placeholder='jsmith@example.com'
                  onChange={handleUsernameChange}
                  required
                  spellCheck='false'
                />
                <Button
                  variant='secondary'
                  size='md'
                  className='m-0 mt-4 w-full rounded shadow drop-shadow-sm sm:mt-0 sm:w-auto sm:rounded-l-none'
                  onClick={() => setOpenSignupModal(true)}
                >
                  Sign Up
                </Button>
              </li>
            )}
            <li>
              <p>
                Navigate to the NextView Dashboard and copy your generated API
                key.
              </p>
              {loggedIn ? (
                <Button
                  variant='secondary'
                  className='my-3 bg-accent drop-shadow-sm'
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>
              ) : (
                <></>
              )}
            </li>
            <li>
              <p>
                In the <code className='rounded border p-1'>.env.local</code>{' '}
                file in the root directory of your application (create one if it
                doesn’t exist), create two environment variables, one for your
                API Key and one for your service’s name.
              </p>
              <div className='my-3'>
                <CopyInput
                  text={`API_KEY=<Your-NextView-API-Key>\nService_Name=<Name-Of-Your-Service>`}
                >
                  {'API_KEY=<Your-NextView-API-Key>'} <br />
                  {'Service_Name=<Name-Of-Your-Service>'}
                </CopyInput>
              </div>
            </li>
            <li>
              <p>
                Start the OpenTelemetry Collector in your terminal via the
                Docker Command:
              </p>
              <div className='my-3'>
                <CopyInput text='docker-compose-up'>
                  docker-compose-up
                </CopyInput>
              </div>
            </li>
          </ol>
          <div className='col-span-12 flex flex-col items-center gap-6 lg:col-span-8'>
            <div className='flex items-center justify-start gap-3 text-center'>
              <img src={partyPopper} className='h-7' />
              <p>
                You're all set up! You can monitor the server operations in your
                Next.js application on the NextView Dashboard!
              </p>
              <img src={partyPopper} className='h-7' />
            </div>
            {loggedIn ? (
              <>
                <Button
                  variant='secondary'
                  className='col-span-8 h-12 w-1/2 rounded-lg bg-accent drop-shadow-lg'
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard!
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
          <img
            src={team}
            className='col-span-5 col-start-8 row-start-1 hidden max-h-96 lg:block'
          />
        </div>
      </div>
    </section>
  );
};

export default Installation;
