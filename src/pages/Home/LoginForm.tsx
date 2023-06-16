import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setError] = useState([]);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        if (res.status === 200) {
          // alert('Log in successful!');
          navigate('/main');
        } else {
          alert('Log in unsuccessful. Please check your login information');
        }
      })
      .catch((err) => console.log('Log in: ERROR: ', err));
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>LOG IN</h2>
        <label className='auth-label' htmlFor='username'>
          User Name
        </label>
        <input
          required
          className='auth-input'
          onChange={handleUsernameChange}
          id='username'
          type='text'
          name='text'
          value={username}
          placeholder='User Name'
        />
        <label className='auth-label' htmlFor='password'>
          Password
        </label>
        <input
          required
          className='auth-input'
          onChange={handlePasswordChange}
          id='password'
          name='password'
          type='password'
          placeholder='********'
        />
        <button className='login-btn' type='submit'>
          Log In
        </button>
      </form>
      {errorMessage}
      <button className='link-btn' onClick={() => navigate('/register')}>
        Do not have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
