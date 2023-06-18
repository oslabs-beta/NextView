import { Link, useParams } from 'react-router-dom';

function PageTab({ page }: { page: string }) {
  const { id } = useParams();

  return (
    <Link
      to={`/dashboard/pages/${id}`}
      className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
    >
      {page}
    </Link>
  );
}

export default PageTab;
