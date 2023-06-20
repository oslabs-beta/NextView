import Topbar from './Topbar';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import PageDisplay from './PageDisplay/PageDisplay';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

const MainDisplay = ({ overviewData, pageData, setStart, setEnd }) => {
  return (
    <div className='col-span-10 col-start-3 flex h-screen flex-col'>
      <Topbar setStart={setStart} setEnd={setEnd} />
      <Routes>
        <Route
          path='/'
          element={<OverviewDisplay overviewData={overviewData} />}
        />
        <Route path='page/:id' element={<PageDisplay pageData={pageData} />} />
        <Route path='/page/:id/*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainDisplay;
