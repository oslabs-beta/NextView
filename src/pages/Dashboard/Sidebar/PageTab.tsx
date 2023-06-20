import { Link } from 'react-router-dom';
import { PageContext } from '../../../contexts/dashboardContexts';
import { useContext } from 'react';

function PageTab({ page }) {
  const { setPage } = useContext(PageContext);

  return (
    <Link
      onClick={() => setPage(page)}
      to={`/dashboard/page/${page._id}`}
      className='ml-3 mr-3 w-11/12 rounded border-b px-6 py-2 text-left font-medium hover:bg-gray-300'
    >
      {page.page}
    </Link>
  );
}

export default PageTab;
