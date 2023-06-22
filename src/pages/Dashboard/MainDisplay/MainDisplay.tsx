import Topbar from './Topbar';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import PageDisplay from './PageDisplay/PageDisplay';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

const MainDisplay = ({ overviewData, pageData, setStart, setEnd }) => {
  return (
    <div className='relative w-full flex-col'>
      <Topbar setStart={setStart} setEnd={setEnd} overviewData={overviewData} />
      <Routes>
        <Route
          path='/'
          element={<OverviewDisplay overviewData={overviewData} />}
        />
        <Route
          path='page/:id'
          element={<PageDisplay overviewData={overviewData} />}
        />
        <Route path='/page/:id/*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainDisplay;
