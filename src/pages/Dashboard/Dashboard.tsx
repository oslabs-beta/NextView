import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex h-screen w-screen flex-row overflow-hidden bg-neutral-200'>
      <Sidebar />
      <div className='flex-1'>
        <MainDisplay />
      </div>
    </div>
  );
};

export default Dashboard;
