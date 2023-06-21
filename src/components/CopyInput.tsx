import { useState } from 'react';
import copy from '../assets/copy.png';
import check from '../assets/checkmark.png';

interface Props {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

export const CopyInput: React.FC<Props> = ({ text, children, className }) => {
  const [copyClicked, setCopyClicked] = useState(false);
  return (
    <button
      className={
        `flex cursor-default gap-5 rounded border px-2 py-2 text-gray-700` +
        (className ? ` ${className}` : '')
      }
      type='button'
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopyClicked(true);
      }}
    >
      <code className='overflow-hidden text-ellipsis whitespace-nowrap pl-1 text-left text-xs leading-6'>
        {children}
      </code>
      {!copyClicked && (
        <img
          src={copy}
          alt='copy-logo'
          className='h-5 w-5 cursor-pointer self-start pr-1 hover:scale-110'
        />
      )}
      {copyClicked && (
        <img
          src={check}
          alt='checkmark'
          className='h-5 w-5 cursor-pointer self-start pr-1 hover:scale-110'
        />
      )}
    </button>
  );
};
