import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

//TODO: convert to conbuttonText + check fetch request + refactor eventhandlers to ensure security + update footerNavigate
const Signup = () => {
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

    // handle insecured input
    if (username.length < 3) alert('Username length must be at least 3!');
    if (password.length < 6) alert('Password length must be at least 6!');

    const body = {
      username,
      password,
    };

    fetch('/users/register', {
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
          alert('Registration successful!');
          navigate('/dashboard');
        } else {
          alert('Registration unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Sign up ERROR: ', err));
  };

  return (
    <AuthForm
      buttonText={'Submit'}
      footerMessage={'Already have an account? Log in here.'}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      footerNavigate={'/login'}
    />
  );
};

export default Signup;
