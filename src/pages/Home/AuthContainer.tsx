import { useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import Modal from './Modal';
import Login from './LoginForm';
import Signup from './SignupForm';

const AuthContainer = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Wrapper>
        <div>
          {loggedIn ? (
            <Button onClick={() => setOpenLoginModal(true)}>Log In</Button>
          ) : (
            <Button>Log Out</Button>
          )}
          <Button onClick={() => setOpenSignupModal(true)}>Sign Up</Button>
        </div>
      </Wrapper>
      <Modal
        open={openLoginModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenLoginModal(false);
        }}
      >
        <p>Log In</p>
        <Login />
        <Button onClick={() => setOpenSignupModal(false)}>Close</Button>
      </Modal>
      <Modal
        open={openSignupModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenSignupModal(false);
        }}
      >
        <p>Sign Up</p>
        <Signup />
        <Button onClick={() => setOpenSignupModal(false)}>Close</Button>
      </Modal>
    </>
  );
};

export default AuthContainer;
