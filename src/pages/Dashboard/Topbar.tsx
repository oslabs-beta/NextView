import { PeriodContext } from './Contexts';
import DropdownList from './DropdownList';
//TODO:styling
import { useContext } from 'react';

const Topbar = () => {
  return (
    <div>
      <div className='flex h-16 w-screen items-end bg-neutral-300 px-4'>
        <p>The Past </p>
        <DropdownList />
        <div>LOGO</div>
      </div>
    </div>
  );
};

export default Topbar;
