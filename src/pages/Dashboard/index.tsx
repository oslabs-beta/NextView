import Dashboard from './Dashboard';

export interface Props {
  fakeProp: string;
}

const DashboardPage = (props: Props) => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
