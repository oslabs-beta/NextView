// import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Add algo to display all pages of developer's app
function MainNavBar() {
  return (
    <>
      <div className='absolute left-14 top-0 m-0 flex h-screen w-40 flex-col items-center bg-slate-600 text-white'>
        <p className='mb-5 mt-10 rounded-lg px-8 py-2 font-sans text-lg font-semibold visited:text-white hover:bg-slate-500 hover:no-underline'>
          Overview
        </p>
        {DashboardDevLinks.map((item) => (
          <SidebarDevLink key={item.key} item={item} />
        ))}
      </div>
    </>
  );
}

function SidebarDevLink({ item }: { item: DevLink }) {
  return (
    <Link
      to={item.path}
      className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
    >
      {item.key}
    </Link>
  );
}

interface DevLink {
  key: string;
  path: string;
}

// Page links from dev app
const DashboardDevLinks: DevLink[] = [
  {
    key: 'fileName',
    path: '/fileName',
  },
  {
    key: 'fileName',
    path: '/fileName',
  },
  {
    key: 'fileName',
    path: '/fileName',
  },
  {
    key: 'fileName',
    path: '/fileName',
  },
  {
    key: 'fileName',
    path: '/fileName',
  },
];

export default MainNavBar;
