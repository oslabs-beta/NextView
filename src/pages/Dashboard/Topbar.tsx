import { PeriodContext } from './Contexts';
import DropdownList from './DropdownList';
import logo from './logo2.png';

//TODO:styling
import { useContext } from 'react';

const Topbar = () => {
  return (
    <div>
      <div className='flex h-16 justify-end gap-x-10 bg-neutral-300 px-4'>
        <div className='flex items-center gap-x-3'>
          <p>The Past </p>
          <DropdownList />
        </div>
        <div className='flex justify-end'>
          <img src={logo} alt='nextview-logo' className='h-22 w-22'></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
