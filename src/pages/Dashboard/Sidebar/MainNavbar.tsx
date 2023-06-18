// import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {
  BarGraphContext,
  BarDataItem,
} from '../../../contexts/dashboardContexts';
import { v4 as uuidv4 } from 'uuid';
import PageTab from './PageTab';

function MainNavBar({ page, setPage }) {
  //TODO: replace with useContext
  const pagesList = ['/api/products', '/ssr/1', '/ssr/2', '/ssr/3', '/'];

  const handleClick = () => {
    // setPage('tomato');
    console.log('selected page');
    console.log('page', page);
  };

  return (
    <div className='flex h-screen w-44 flex-col items-center bg-slate-600 text-white'>
      <p className='mb-5 mt-10 rounded-lg px-8 py-2 font-sans text-lg font-semibold visited:text-white hover:bg-slate-500 hover:no-underline'>
        Overview
      </p>
      {pagesList.map((page) => (
        <PageTab key={uuidv4()} page={page} />
      ))}
      <button onClick={handleClick}>select page</button>
    </div>
  );
}

export default MainNavBar;
