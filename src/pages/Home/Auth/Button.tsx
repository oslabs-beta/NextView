import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
