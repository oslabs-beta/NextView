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
    <section
      className={`flex w-full flex-grow-0 flex-row items-center justify-center 
      bg-no-repeat 
      pb-24 pt-60 md:justify-between md:bg-[url('/src/assets/overview_edited_rounded.png')] md:bg-[length:1000px] md:bg-[right_-520px_top_0px] lg:bg-[length:1100px] 
      lg:bg-[right_-350px_top_0px] xl:bg-[length:1500px] 
      xl:bg-[right_-400px_top_0px] 
      xl:pb-96
      2xl:bg-[length:1500px] 
      2xl:bg-[right_-150px_top_0px]
      3xl:bg-[length:1800px]
      3xl:bg-[right_-50px_top_0px]
      3xl:pb-[32rem]`}
    >
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
      {/* <img
        src={overview}
        alt='nextview-logo'
        className='ms-auto hidden max-w-[80%] drop-shadow-xl md:block'
      ></img> */}
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
