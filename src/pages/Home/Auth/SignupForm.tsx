import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../../../contexts/userContexts';
import { v4 as uuidv4 } from 'uuid';
import validateStrongPassword from '../../../../helpers/validateStrongPassword';

const Signup = () => {
  const { setLoggedIn, username, password } = useContext(UserContext);

  const navigate = useNavigate();
  const uniqueId = uuidv4();

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length < 3) {
      alert('Username length must be at least 3!');
      return;
    }
    // validate strong password
    const strongPassword = validateStrongPassword(password);

    if (!strongPassword) {
      alert(
        'The password length must be greater than or equal to 8, contains at least one uppercase character, one lowercase character, one numeric value, and one special characters of !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
      );
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
          localStorage.setItem('loggedIn', 'true');
          setLoggedIn(true);
          addApp();
          navigate('/dashboard');
        } else {
          alert('Registration unsuccessful. Please retry.');
        }
      })
      .catch((err) => console.log('Sign up ERROR: ', err));
  };

  return (
    <AuthForm
      usernameInputId={`un${uniqueId}`}
      passwordInputId={`pwd${uniqueId}`}
      text={'Sign Up'}
      handleSubmit={handleSubmit}
      value={username}
    />
  );
};

export default Signup;
