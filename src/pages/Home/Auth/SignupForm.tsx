import { useState, ChangeEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../../../contexts/userContexts';

//TODO: refactor eventhandlers to ensure security + add typing
const Signup = () => {
  const { loggedIn, setLoggedIn, username, setUsername } =
    useContext(UserContext);

  // const [username, setUsername] = useState(initialValue);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function addApp() {
    fetch('/apps', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
      })
      .catch((err) => console.log('Add app ERROR: ', err));
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(' handleSubmit for signup invoked!');
    e.preventDefault();

    // handle insecured input
    if (username.length < 3) {
      alert('Username length must be at least 3!');
      return;
    }
    if (password.length < 6) {
      alert('Password length must be at least 6!');
      return;
    }

    const body = {
      username,
      password,
    };

    fetch('/user/register', {
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
        if (res.status === 201) {
          setLoggedIn(true);
          addApp();

          // console.log('loggedIn state upon signup', loggedIn)
          navigate('/dashboard');
        } else {
          alert('Registration unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Sign up ERROR: ', err));
  };

  return (
    <AuthForm
      text={'Sign Up'}
      footerMessage={'Already have an account? Log in here.'}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      footerNavigate={'/login'} // route to be set up
      value={username}
    />
  );
};

export default Signup;
