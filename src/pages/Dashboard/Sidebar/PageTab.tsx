import { Link } from 'react-router-dom';

//TODO: update path

function PageTab({ page }: { page: string }) {
  return (
    <Link
      to={`/dashboard/page=${page}`}
      className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
    >
      {page}
    </Link>
  );
}

export default PageTab;
