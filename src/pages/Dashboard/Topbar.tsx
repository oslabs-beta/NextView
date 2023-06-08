import DropdownList from './DropdownList';
//TODO:styling

const Topbar = () => {
  return (
    <div>
      <div className='flex h-16 justify-end bg-neutral-300 px-4'>
        <div className='flex'>
          <p>The Past </p>
          <DropdownList />
        </div>
        <div className='flex justify-end'>
          <img
            src='./logo2.png'
            alt='nextview-logo'
            className='h-24 w-24'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
