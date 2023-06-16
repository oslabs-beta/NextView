import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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

    fetch('http://localhost:3000/user/Signup', {
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
        if (res.status === 201) {
          alert('Registration successful!');
          navigate('/login');
        } else {
          alert('Registration unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Sign up ERROR: ', err));
  };

  return (
    <AuthForm
      text={'Submit'}
      message={'Already have an account? Log in here.'}
    />
    // <div classNameName='form-container'>
    //   <form classNameName='signup-form' onSubmit={handleSubmit}>
    //     <h2>Signup</h2>
    //     <label classNameName='auth-label' htmlFor='username'>
    //       User Name
    //     </label>
    //     <input
    //       required
    //       classNameName='auth-input'
    //       onChange={handleUsernameChange}
    //       id='username'
    //       type='text'
    //       name='text'
    //       value={username}
    //       placeholder='User Name'
    //     />
    //     <label classNameName='auth-label' htmlFor='password'>
    //       Password
    //     </label>
    //     <input
    //       required
    //       classNameName='auth-input'
    //       onChange={handlePasswordChange}
    //       id='password'
    //       name='password'
    //       type='password'
    //       placeholder='********'
    //     />
    //     <button classNameName='submit-btn' type='submit'>
    //       Submit
    //     </button>
    //   </form>
    //   <button classNameName='link-btn' onClick={() => navigate('/login')}>
    //     Already have an account? Log in here.
    //   </button>
    // </div>
  );
};

export default Signup;
