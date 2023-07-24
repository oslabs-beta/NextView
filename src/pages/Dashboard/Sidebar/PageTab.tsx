import { NavLink } from 'react-router-dom';
import { PageContext } from '../../../contexts/dashboardContexts';
import { useContext } from 'react';

function PageTab({ pageSelection }) {
  const { page, setPage } = useContext(PageContext);

  return (
    <NavLink
      onClick={() => setPage(pageSelection)}
      to={`/dashboard/page/${pageSelection._id}`}
      className={({ isActive }) =>
        isActive
          ? 'ml-3 mr-3 w-11/12 rounded border border-t-0 bg-gray-200 px-6 py-2 text-left text-sm font-semibold drop-shadow-sm'
          : 'ml-3 mr-3 w-11/12 rounded border-b px-6 py-2 text-left text-sm hover:bg-gray-100'
      }
    >
      {pageSelection.page}
    </NavLink>
  );
}

export default PageTab;
