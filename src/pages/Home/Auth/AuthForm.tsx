import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

// TODO: change typing for event handlers
interface AuthFormProps {
  text: string;
  footerMessage: string;
  handleSubmit: any;
  handleUsernameChange: any;
  handlePasswordChange: any;
  footerNavigate: string;
  value: string;
}

const AuthForm = ({
  text,
  footerMessage,
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  footerNavigate,
  value,
}: AuthFormProps) => {
  const navigate = useNavigate();

  return (
    <>
      <p className='mb-4 block text-center text-xl font-bold text-gray-700'>
        {text}
      </p>
      <form>
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='username'
            type='text'
            placeholder='Username'
            value={value}
            required
            onChange={handleUsernameChange}
            spellCheck='false'
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            placeholder='******************'
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex items-center justify-between'>
          <Button variant='secondary' size='lg' onClick={handleSubmit}>
            {text}
          </Button>
          <button
            className='inline-block align-baseline text-sm font-bold text-secondary hover:text-blue-800'
            onClick={() => navigate(footerNavigate)}
          >
            {footerMessage}
          </button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
