import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='rounded bg-blue-500 p-2 text-white hover:bg-blue-600'
    >
      {children}
    </button>
  );
};

export default Button;
