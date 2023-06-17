import overview from '../../assets/overview_edited-min.png';
import Button from '../../components/Button';
import copy from '../../assets/copy.png';
import Modal from './Auth/Modal';
import { useState } from 'react';
import SignupForm from './Auth/SignupForm';

const Overview = () => {
  const [openSignupModal, setOpenSignupModal] = useState(false);
  return (
    <section className='flex flex-row items-center justify-center md:justify-between'>
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
            required
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
            onClick={() =>
              navigator.clipboard.writeText('npm i nextview-tracing')
            }
          >
            <code className='text-xs'>npm i nextview-tracing</code>
            <img
              src={copy}
              alt='copy-logo'
              className='h-4 w-4 cursor-pointer'
            ></img>
          </button>
        </div>
      </div>
      <img
        src={overview}
        alt='nextview-logo'
        className='relative hidden drop-shadow-xl md:block'
      ></img>
      <Modal
        open={openSignupModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenSignupModal(false);
        }}
      >
        <SignupForm initialValue='test' />
      </Modal>
    </section>
  );
};

export default Overview;
