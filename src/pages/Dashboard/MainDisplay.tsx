import Topbar from './Topbar';
import GraphDisplay from './GraphDisplay';

const MainDisplay = () => {
  return (
    <div className='h-screen w-[calc(100%-216px)]'>
      <Topbar />
      <GraphDisplay />
    </div>
  );
};

export default MainDisplay;
