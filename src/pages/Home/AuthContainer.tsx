import { useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import Modal from './Modal';
import Login from './LoginForm';

const AuthContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper>
        <div>
          <Button onClick={() => setOpenModal(true)}>Log In</Button>
        </div>
      </Wrapper>
      <Modal
        open={openModal}
        onClose={() => {
          console.log('%c It closes', 'color: red');
          setOpenModal(false);
        }}
      >
        <p>Add Log In form here</p>
        <Login />
        <Button onClick={() => setOpenModal(false)}>Close</Button>
      </Modal>
    </>
  );
};

export default AuthContainer;
