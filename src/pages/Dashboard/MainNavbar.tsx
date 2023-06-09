// import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BarGraphContext, BarDataItem } from './Contexts';

// TODO: Add algo to display all pages of developer's app
function MainNavBar() {
  const data = useContext(BarGraphContext);
  console.log('data', data);
  return (
    <div className='flex h-screen w-44 flex-col items-center bg-slate-600 text-white'>
      <p className='mb-5 mt-10 rounded-lg px-8 py-2 font-sans text-lg font-semibold visited:text-white hover:bg-slate-500 hover:no-underline'>
        Overview
      </p>
      {data.map((item) => (
        <SidebarDevLink key={item.page} item={item} />
      ))}
    </div>
  );
}

// function SidebarDevLink({ item }: { item: DevLink }) {
//   return (
//     <Link
//       to={item.path}
//       className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
//     >
//       {item.key}
//     </Link>
//   );
// }

function SidebarDevLink({ item }: { item: BarDataItem }) {
  return (
    <Link
      to={item.page}
      className='rounded-lg px-6 py-2 font-sans text-base font-semibold visited:text-white hover:bg-slate-500 hover:text-white hover:no-underline'
    >
      {item.page}
    </Link>
  );
}

// interface DevLink {
//   key: string;
//   path: string;
// }

// Page links from dev app
// const DashboardDevLinks: DevLink[] = [
//   {
//     key: 'fileName',
//     path: '/fileName',
//   },
//   {
//     key: 'fileName',
//     path: '/fileName',
//   },
//   {
//     key: 'fileName',
//     path: '/fileName',
//   },
//   {
//     key: 'fileName',
//     path: '/fileName',
//   },
//   {
//     key: 'fileName',
//     path: '/fileName',
//   },
// ];

export default MainNavBar;
