import { useState } from 'react';
import copy from '../assets/copy.png';
import check from '../assets/checkmark.png';

interface Props {
  text: string;
  children?: React.ReactNode;
}

export const CopyInput: React.FC<Props> = ({ text, children }) => {
  const [copyClicked, setCopyClicked] = useState(false);
  return (
    <button
      className='focus:shadow-outline flex w-auto cursor-default appearance-none flex-row items-center justify-evenly gap-5 rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
      id='npm'
      type='button'
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopyClicked(true);
      }}
    >
      <code className='whitespace-nowrap pl-1 text-left text-xs leading-6'>
        {children}
      </code>
      {!copyClicked && (
        <img
          src={copy}
          alt='copy-logo'
          className='h-5 w-5 cursor-pointer self-start hover:scale-110'
        />
      )}
      {copyClicked && (
        <img
          src={check}
          alt='checkmark'
          className='h-5 w-5 cursor-pointer self-start hover:scale-110'
        />
      )}
    </button>
  );
};