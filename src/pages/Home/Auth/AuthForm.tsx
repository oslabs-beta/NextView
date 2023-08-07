import Button from '../../../components/Button';
import { UserContext } from '../../../contexts/userContexts';
import React, { useContext, ChangeEvent, useCallback } from 'react';

interface AuthFormProps {
  usernameInputId: string;
  passwordInputId: string;
  text: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  value?: string;
}

const AuthForm = React.memo(
  ({
    usernameInputId,
    passwordInputId,
    text,
    handleSubmit,
    value,
  }: AuthFormProps) => {
    const { setPassword, setUsername } = useContext(UserContext);

    const handleUsernameChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      },
      [],
    );

    const handlePasswordChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      },
      [],
    );

    return (
      <>
        <p className='mb-4 block text-center text-xl font-bold text-gray-700'>
          {text}
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-bold text-gray-700'
              htmlFor={usernameInputId}
            >
              Username
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              id={usernameInputId}
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
              htmlFor={passwordInputId}
            >
              Password
            </label>
            <input
              className='focus:shadow-outline mb-3 w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              id={passwordInputId}
              type='password'
              placeholder='******************'
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Button type='submit' variant='secondary' size='lg'>
              {text}
            </Button>
          </div>
        </form>
      </>
    );
  },
);

export default AuthForm;
