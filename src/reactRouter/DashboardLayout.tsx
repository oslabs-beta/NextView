import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/dashboard'>Overview</Link>
          </li>
          <li>
            <Link to='/dashboard/pages'>Page View</Link>
          </li>
          <li>
            <Link to='/dashboard/appslist'>Apps List</Link>
          </li>
          <li>
            <Link to='/dashboard/settings'>Settings</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
