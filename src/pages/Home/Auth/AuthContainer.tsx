import { useState, useContext } from 'react';
import Button from '../../../components/Button';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import {
//   UserContext,
//   AppsListContext,
// } from '../../../contexts/userContexts';

const AuthContainer = () => {
  //TODO: convert to context
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  // const {loggedIn, setLoggedIn} = useContext(UserContext);

  return (
    <div>
      <ul className='flex'>
        <li>
          {loggedIn ? (
            <Button onClick={() => setOpenLoginModal(true)}>Sign In</Button>
          ) : (
            <Button onClick={() => null}>Log Out</Button>
          )}
        </li>
        <li className='mr-3'>
          <Button variant='secondary' onClick={() => setOpenSignupModal(true)}>
            Sign Up
          </Button>
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
