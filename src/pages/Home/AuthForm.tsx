import React, { useState } from 'react';

interface AuthFormProps {
  text: string;
  message: string;
}

const AuthForm = ({ text, message }: AuthFormProps) => {
  return (
    <>
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
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            placeholder='******************'
          />
          <p className='text-xs italic text-red-500'>
            Please choose a password.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='button'
          >
            {text}
          </button>
          <a
            className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
            href='#'
          >
            {message}
          </a>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
