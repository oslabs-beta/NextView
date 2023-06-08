import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex w-full bg-neutral-200'>
      <Sidebar />
      <MainDisplay />
    </div>
  );
};

export default Dashboard;
