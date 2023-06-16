import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthContainer = () => {
  //TODO: convert to context
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <ul className='flex'>
        <li className='mr-3'>
          {loggedIn ? (
            <Button onClick={() => setOpenLoginModal(true)}>Log In</Button>
          ) : (
            <Button>Log Out</Button>
          )}
        </li>
        <li className='mr-3'>
          <Button onClick={() => setOpenSignupModal(true)}>Sign Up</Button>
        </li>
      </ul>
      <Modal
        open={openLoginModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenLoginModal(false);
        }}
      >
        <LoginForm />
      </Modal>
      <Modal
        open={openSignupModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenSignupModal(false);
        }}
      >
        <SignupForm />
      </Modal>
    </div>
  );
};

export default AuthContainer;
