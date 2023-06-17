import overview from '../../assets/overview_edited-min.png';
import Button from '../../components/Button';
import copy from '../../assets/copy.png';
import check from '../../assets/checkmark.png';
import Modal from './Auth/Modal';
import { ChangeEvent, useState } from 'react';
import SignupForm from './Auth/SignupForm';

const Overview = () => {
  const [initialUsername, setInitialUsername] = useState('');
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInitialUsername(e.target.value);
  };

  return (
    <section className='flex flex-grow-0 flex-row items-center justify-center md:justify-between'>
      <div className='flex flex-col md:ml-44'>
        <h1>NextView</h1>
        <span className='whitespace-nowrap'>
          Measure your Next.js application
        </span>
        <div className='mt-6 flex flex-row'>
          <input
            className='focus:shadow-outline w-auto appearance-none rounded rounded-r-none border px-3 py-2 leading-tight  text-gray-700 focus:outline-none'
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
            className='m-0 rounded-l-none rounded-r shadow'
            onClick={() => setOpenSignupModal(true)}
          >
            Sign Up
          </Button>
        </div>
        <div className='mt-6'>
          <button
            className='focus:shadow-outline flex w-auto cursor-default appearance-none flex-row items-center justify-evenly gap-5 rounded border px-3 py-2  leading-tight text-gray-700 focus:outline-none'
            id='npm'
            type='button'
            onClick={() => {
              navigator.clipboard.writeText('npm i nextview-tracing');
              setCopyClicked(true);
            }}
          >
            <code className='text-xs'>npm i nextview-tracing</code>
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
      <img
        src={overview}
        alt='nextview-logo'
        className='ms-auto hidden max-w-[80%] drop-shadow-xl md:block'
      ></img>
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
