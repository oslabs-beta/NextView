import { useState, useContext, ChangeEvent } from 'react';
import Button from '../../../components/Button';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { UserContext } from '../../../contexts/userContexts';
import { useNavigate } from 'react-router-dom';

const AuthContainer = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch('/user/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => {
        if (res.status === 204) {
          localStorage.setItem('loggedIn', 'true');
          setLoggedIn(false);
          window.location.reload();
        } else {
          alert('Logout unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Logout ERROR: ', err));
  };

  return (
    <div>
      <ul className='flex'>
        <li>
          {loggedIn ? (
            <Button className='mx-0 drop-shadow-sm' onClick={handleLogOut}>
              Log Out
            </Button>
          ) : (
            <Button
              className='mx-0 drop-shadow-sm'
              onClick={() => setOpenLoginModal(true)}
            >
              Sign In
            </Button>
          )}
        </li>
        <li className='mr-3'>
          {loggedIn ? (
            <Button
              variant='secondary'
              className='mx-0 bg-accent drop-shadow-sm'
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant='secondary'
              className='mx-0 bg-secondary drop-shadow-sm'
              onClick={() => setOpenSignupModal(true)}
            >
              Sign Up
            </Button>
          )}
        </li>
      </ul>
      <Modal
        open={openLoginModal}
        onClose={() => {
          setOpenLoginModal(false);
        }}
      >
        <LoginForm />
      </Modal>
      <Modal
        open={openSignupModal}
        onClose={() => {
          setOpenSignupModal(false);
        }}
      >
        <SignupForm />
      </Modal>
    </div>
  );
};

export default AuthContainer;
