import React, { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../../../contexts/userContexts';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
  const { setLoggedIn, username, password } = useContext(UserContext);

  const navigate = useNavigate();
  const uniqueId = uuidv4();

  const handleSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>) => {
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
          if (!res.ok) {
            throw new Error('Log in unsuccessful. Please retry.' + res.status);
          }
          return res.json();
        })
        .then((res) => {
          if (res.user) {
            localStorage.setItem('user', JSON.stringify(res.user));
            setLoggedIn(true);
            navigate('/dashboard');
          }
        })
        .catch((err) => console.log('Log in: ERROR: ', err));
    },
    [navigate, password, setLoggedIn, username],
  );

  return (
    <AuthForm
      usernameInputId={`un${uniqueId}`}
      passwordInputId={`pwd${uniqueId}`}
      text={'Sign In'}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
