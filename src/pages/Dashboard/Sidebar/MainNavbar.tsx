import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PageTab from './PageTab';
import Button from '../../../components/Button';
import { useContext } from 'react';
import { PageContext } from '../../../contexts/dashboardContexts';

function MainNavBar({ overviewData }) {
  const pagesList = overviewData.pages;
  const { setPage } = useContext(PageContext) || {
    setPage: () => {
      // No operation function, used as a placeholder
    },
  };

  return (
    <div className='flex h-screen min-w-[200px] flex-col items-center border-l border-r bg-white'>
      <Link to='/dashboard' className='flex w-full'>
        <Button
          variant='secondary'
          className='mt-5 h-10 w-full bg-secondary text-base drop-shadow-sm'
          onClick={() => setPage(undefined)}
        >
          Overview
        </Button>
      </Link>

      <span className='mt-5 w-11/12 border-b p-2 font-bold'>Pages</span>

      {pagesList
        .slice()
        .reverse()
        .map((page) => (
          <PageTab key={uuidv4()} pageSelection={page} />
        ))}
    </div>
  );
}

export default MainNavBar;
