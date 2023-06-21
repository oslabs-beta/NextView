import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PageTab from './PageTab';
import Button from '../../../components/Button';

function MainNavBar({ overviewData }) {
  const pagesList = overviewData.pages;

  return (
    <div className='flex h-screen flex-col items-center border-l border-r bg-white'>
      <Button
        variant='secondary'
        className='mt-5 h-10 w-[90%] bg-secondary text-base drop-shadow-sm'
      >
        <Link to='/dashboard' className=''>
          Dashboard
        </Link>
      </Button>

      <span className='mt-5 w-11/12 border-b p-2 font-bold'>Pages</span>

      {pagesList.toReversed().map((page) => (
        <PageTab key={uuidv4()} page={page} />
      ))}
    </div>
  );
}

export default MainNavBar;
