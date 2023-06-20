import { ChangeEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../../../contexts/userContexts';
import { v4 as uuidv4 } from 'uuid';

//TODO: refactor eventhandlers to ensure security + add typing
const Login = () => {
  const { setLoggedIn, username, setUsername } = useContext(UserContext);

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const uniqueId = uuidv4();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        console.log('res.status: ', res);
        if (res.status === 204) {
          setLoggedIn(true);
          navigate('/dashboard');
        } else {
          alert('Log in unsuccessful. Please check your login information');
        }
      })
      .catch((err) => console.log('Log in: ERROR: ', err));
  };

  return (
    <AuthForm
      usernameInputId={`un${uniqueId}`}
      passwordInputId={`pwd${uniqueId}`}
      text={'Sign In'}
      // footerMessage={'Do not have an account? Sign up here.'}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      // footerNavigate={'/signup'}
    />
  );
};

export default Login;
