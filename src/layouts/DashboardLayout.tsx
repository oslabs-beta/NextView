import { Outlet } from 'react-router-dom';
import MainDisplay from '../pages/Dashboard/MainDisplay/MainDisplay';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <MainDisplay />

      <Outlet />
    </>
  );
}
