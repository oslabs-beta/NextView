import { Outlet } from 'react-router-dom';

export default function PagesLayout() {
  return (
    <>
      <h1>Page</h1>

      <Outlet />
    </>
  );
}
