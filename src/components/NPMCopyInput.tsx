import { useState } from 'react';

export const NPMCopyInput = () => {
  const [copyClicked, setCopyClicked] = useState(false);
  return (
    <button
      className='focus:shadow-outline flex w-auto cursor-default appearance-none flex-row items-center justify-evenly gap-5 rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
      id='npm'
      type='button'
      onClick={() => {
        navigator.clipboard.writeText('npm i nextview-tracing');
        setCopyClicked(true);
      }}
    >
      <code className='whitespace-nowrap pl-1 text-xs'>
        npm i nextview-tracing
      </code>
      {!copyClicked && (
        <img
          src={
            'https://ik.imagekit.io/4ys419c44/copy.webp?updatedAt=1692136904249'
          }
          alt='copy-logo'
          className='h-5 w-5 cursor-pointer hover:scale-110'
        />
      )}
      {copyClicked && (
        <img
          src={
            'https://ik.imagekit.io/4ys419c44/checkmark.png?updatedAt=1692136904048'
          }
          alt='checkmark'
          className='h-5 w-5 cursor-pointer hover:scale-110'
        />
      )}
    </button>
  );
};
