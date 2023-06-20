import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PageTab from './PageTab';

function MainNavBar({ overviewData }) {
  const pagesList = overviewData.pages;

  return (
    <div className='flex h-screen flex-1 flex-col items-center border-l border-r bg-white'>
      <Link
        to='/dashboard'
        className='mx-1 mb-5 mt-5 rounded border px-8 py-2 font-sans text-lg font-semibold hover:bg-gray-300'
      >
        Dashboard
      </Link>

      <span className='w-11/12 border-b p-2 font-bold'>Pages</span>

      {pagesList.toReversed().map((page) => (
        <PageTab key={uuidv4()} page={page} />
      ))}
    </div>
  );
}

export default MainNavBar;
