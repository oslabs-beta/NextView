import Button from '../../components/Button';
import copy from '../../assets/copy.png';
import check from '../../assets/checkmark.png';
import overview from '../../assets/overview_edited_rounded.png';
import Modal from './Auth/Modal';
import { ChangeEvent, useState } from 'react';
import SignupForm from './Auth/SignupForm';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

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
  'Optimize',
  2000,
  'Measure ',
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

const Overview = () => {
  const [initialUsername, setInitialUsername] = useState('');
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInitialUsername(e.target.value);
  };

  return (
    <section
      className={`grid w-full grid-cols-12 flex-row items-center justify-center 
      gap-6 pl-[max((100vw-1500px)/2,48px)] pr-[(100vw-1500px)/2] md:justify-evenly`}
    >
      <div className='relative col-[_span_10] flex flex-col md:col-[_span_4] md:ml-20'>
        <h1 className='font-bold'>NextView</h1>
        <span className='whitespace-nowrap'>
          <TypeAnimation
            ref={ref}
            className={`${CURSOR_CLASS_NAME}`}
            cursor={false}
            sequence={sequence}
            preRenderFirstString={true}
          >
            Measure
          </TypeAnimation>
          your Next.js application
        </span>
        <div className='mt-6 flex flex-row flex-wrap'>
          <input
            className='focus:shadow-outline w-full flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none  wrap:w-auto wrap:rounded-r-none'
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
            className='m-0 mt-4 w-full rounded shadow wrap:mt-0 wrap:w-auto wrap:rounded-l-none'
            onClick={() => setOpenSignupModal(true)}
          >
            Sign Up
          </Button>
        </div>
        <div className='mt-6 '>
          <button
            className='focus:shadow-outline flex w-auto cursor-default appearance-none flex-row items-center justify-evenly gap-5 rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
            id='npm'
            type='button'
            onClick={() => {
              navigator.clipboard.writeText('npm i nextview-tracing');
              setCopyClicked(true);
            }}
          >
            <code className='whitespace-nowrap pl-1 text-xs'>
              npm i nextview-tracing
            </code>
            {!copyClicked && (
              <img
                src={copy}
                alt='copy-logo'
                className='h-5 w-5 cursor-pointer hover:scale-110'
              />
            )}
            {copyClicked && (
              <img
                src={check}
                alt='checkmark'
                className='h-5 w-5 cursor-pointer hover:scale-110'
              />
            )}
          </button>
        </div>
      </div>
      <div className='relative col-[_span_8] hidden w-[1000px] md:flex '>
        <img
          src={overview}
          alt='nextview-logo'
          className='-z-10 drop-shadow-lg'
        ></img>
      </div>
      <Modal
        open={openSignupModal}
        onClose={() => {
          setOpenSignupModal(false);
        }}
      >
        <SignupForm initialValue={initialUsername} key={initialUsername} />
      </Modal>
    </section>
  );
};

export default Overview;
