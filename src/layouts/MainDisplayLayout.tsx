import { Outlet } from 'react-router-dom';
import Topbar from '../pages/Dashboard/MainDisplay/Topbar';

export default function MainDisplayLayout() {
  return (
    <>
      <h1>Topbar</h1>
      {/* <Topbar /> */}

      <Outlet />
    </>
  );
}
