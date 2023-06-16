import { useNavigate } from 'react-router-dom';

// TODO: update type for event handlers:

interface AuthFormProps {
  text: string;
  footerMessage: string;
  handleSubmit: any;
  handleUsernameChange: any;
  handlePasswordChange: any;
  footerNavigate: string;
}

const AuthForm = ({
  text,
  footerMessage,
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  footerNavigate,
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
            for='username'
          >
            Username
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='username'
            type='text'
            placeholder='Username'
            required
            onChange={handleUsernameChange}
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            for='password'
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
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='button'
            onClick={handleSubmit}
          >
            {text}
          </button>
          <button
            className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
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
