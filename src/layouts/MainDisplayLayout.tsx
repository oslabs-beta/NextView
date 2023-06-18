import { Outlet } from 'react-router-dom';
import Topbar from '../pages/Dashboard/MainDisplay/Topbar';
import OverviewDisplay from '../pages/Dashboard/MainDisplay/OverviewDisplay/OverviewDisplay';
import PageDisplay from '../pages/Dashboard/MainDisplay/PageDisplay/PageDisplay';

export default function MainDisplayLayout() {
  return (
    <>
      <Topbar />
      <OverviewDisplay />

      <Outlet />
    </>
  );
}
