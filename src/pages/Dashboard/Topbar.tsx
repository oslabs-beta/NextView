import DropdownList from './DropdownList';
//TODO:styling

const Topbar = () => {
  return (
    <div>
      <div className='flex h-16 items-end bg-neutral-300 px-4'>
        <p>The Past </p>
        <DropdownList />
        <div>LOGO</div>
      </div>
    </div>
  );
};

export default Topbar;
