import Topbar from './Topbar';
import OverviewDisplay from './OverviewDisplay/OverviewDisplay';
import PageDisplay from './PageDisplay/PageDisplay';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import {
  OverviewDataType,
  PageDataType,
} from '../../../types/ComponentPropTypes';

interface MainDisplayProps {
  overviewData: OverviewDataType;
  pageData: PageDataType;
  setStart: (value: string) => void;
  setEnd: (value: string) => void;
}

const MainDisplay: React.FC<MainDisplayProps> = ({
  overviewData,
  pageData,
  setStart,
  setEnd,
}) => {
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
