import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen justify-center bg-gray-100 pt-16'>
      {children}
    </div>
  );
};

export default Wrapper;
