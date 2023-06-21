import Button from '../../components/Button';
import overview from '../../assets/overview.png';
import { ChangeEvent, useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { UserContext } from '../../contexts/userContexts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NPMCopyInput } from '../../components/NPMCopyInput';

const sequence = [
  'Build',
  2000,
  'Analyze',
  2000,
  'Debug',
  2000,
  'Develop',
  2000,
  'Trace',
  2000,
  'Create',
  2000,
  'Visualize',
  2000,
  'Test',
  2000,
  'Instrument',
  2000,
  'Measure',
  2000,
  'Optimize ',
  () => showCursorAnimation(false),
];
const CURSOR_CLASS_NAME = 'type';
const ref = React.createRef<HTMLSpanElement>();
const showCursorAnimation = (show: boolean) => {
  if (!ref.current) {
    return;
  }

  const el = ref.current;
  if (show) {
    el.classList.add(CURSOR_CLASS_NAME);
  } else {
    el.classList.remove(CURSOR_CLASS_NAME);
  }
};

interface Props {
  setOpenSignupModal(value: React.SetStateAction<boolean>): void;
}

const Overview: React.FC<Props> = ({ setOpenSignupModal }) => {
  const { setUsername, username, loggedIn } = useContext(UserContext);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const navigate = useNavigate();

  return (
    <section
      className={`mb-20 grid w-full grid-cols-12 flex-row items-center
      justify-center gap-6 pl-[max((100vw-1500px)/2,48px)] pr-[(100vw-1500px)/2] md:mb-16 md:justify-evenly`}
    >
      <div className='relative col-[_span_10] mt-20 flex flex-col md:col-[_span_4] md:ml-20'>
        <h1 className='font-bold'>NextView</h1>
        <span className='whitespace-nowrap'>
          <TypeAnimation
            ref={ref}
            className={`${CURSOR_CLASS_NAME}`}
            cursor={false}
            sequence={sequence}
            preRenderFirstString={true}
          />
          your Next.js application
        </span>

        <div className='mt-6 flex flex-row flex-wrap justify-items-start'>
          {loggedIn ? (
            <>
              <div className='mx-auto flex-grow-0 basis-0 self-center whitespace-nowrap wrap:mx-0'>
                Welcome {username}!
              </div>
              <Button
                variant='secondary'
                className='w-full bg-accent drop-shadow-xl wrap:w-auto'
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
            </>
          ) : (
            <>
              <input
                className='focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none  wrap:w-auto wrap:rounded-r-none'
                // id='username'
                type='text'
                placeholder='jsmith@example.com'
                onChange={handleUsernameChange}
                required
                spellCheck='false'
              />
              <Button
                variant='secondary'
                size='md'
                className='m-0 mt-4 w-full rounded shadow drop-shadow-xl wrap:mt-0 wrap:w-auto wrap:rounded-l-none'
                onClick={() => setOpenSignupModal(true)}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        <div className='mb-10 mt-6 self-center md:self-auto'>
          <NPMCopyInput />
        </div>
      </div>
      <div className='relative col-[_span_8] hidden w-[1000px] md:flex '>
        <img
          src={overview}
          alt='nextview-logo'
          className='-z-10 drop-shadow-lg'
        ></img>
      </div>
    </section>
  );
};

export default Overview;
