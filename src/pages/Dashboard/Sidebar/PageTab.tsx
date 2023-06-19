import { Link } from 'react-router-dom';
import { PageContext } from '../../../contexts/dashboardContexts';
import { useContext } from 'react';

function PageTab({ page }) {
  const { setPage } = useContext(PageContext);

  return (
    <Link
      onClick={() => setPage(page)}
      to={`/dashboard/page/${page._id}`}
      className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
    >
      {page.page}
    </Link>
  );
}

export default PageTab;
