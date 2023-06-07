import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex h-screen w-screen flex-row bg-neutral-200'>
      <Sidebar />
      <div className='ml-36 flex-1'>
        <MainDisplay />
      </div>
    </div>
  );
};

export default Dashboard;
