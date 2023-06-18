import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import MainDisplayLayout from './MainDisplayLayout';

export default function DashboardLayout() {
  return (
    <>
      <>
        {/* <Sidebar /> */}
        <h1>Sidebar</h1>
        <MainDisplayLayout />
      </>

      {/* <>
        <Outlet />
      </> */}
    </>
  );
}
