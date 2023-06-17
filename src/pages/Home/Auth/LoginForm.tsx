import { ChangeEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../../../contexts/userContexts';

//TODO: refactor eventhandlers to ensure security + add typing
const Login = () => {
  const { loggedIn, setLoggedIn, username, setUsername } =
    useContext(UserContext);

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
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
          setLoggedIn(true);
          // console.log('loggedIn state upon login', loggedIn)
          // console.log('user name', username)
          navigate('/dashboard'); // route to be set up
        } else {
          alert('Log in unsuccessful. Please check your login information');
        }
      })
      .catch((err) => console.log('Log in: ERROR: ', err));
  };

  return (
    <AuthForm
      text={'Sign In'}
      footerMessage={'Do not have an account? Sign up here.'}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      footerNavigate={'/signup'}
    />
  );
};

export default Login;
