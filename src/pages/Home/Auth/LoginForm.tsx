import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

//TODO: convert to conbuttonText + check fetch request + refactor eventhandlers to ensure security + update footerNavigate
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username, // username & password input set as required in input tags
        password,
      }),
    })
      .then((res) => {
        console.log('res.status: ', res);
        if (res.status === 204) {
          // setLoggedIn(true);
          navigate('/dashboard');
        } else {
          alert('Log in unsuccessful. Please check your login information');
        }
      })
      .catch((err) => console.log('Log in: ERROR: ', err));
  };

  return (
    <AuthForm
      text={'Log In'}
      footerMessage={'Do not have an account? Sign up here.'}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      footerNavigate={'/signup'}
    />
  );
};

export default Login;
