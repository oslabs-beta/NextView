import { useContext } from 'react';

const Table = () => {
  const mockData = {
    operations: [
      {
        name: 'actionA',
        duration: 713,
        kind: 'server',
        traces: 32,
        executions: 3,
      },
      {
        name: 'actionB',
        duration: 624,
        kind: 'internal',
        traces: 21,
        executions: 2,
      },
      {
        name: 'actionC',
        duration: 442,
        kind: 'client',
        traces: 14,
        executions: 2,
      },
    ],
  };

  const tableData = [];
  for (let i = 0; i < mockData.operations.length; i++) {
    tableData.push(
      <tr>
        <td className='py-3'>{mockData.operations[i].name}</td>
        <td className='py-3'>{mockData.operations[i].duration}</td>
        <td className='py-3'>{mockData.operations[i].kind}</td>
        <td className='py-3'>{mockData.operations[i].traces}</td>
        <td className='py-3'>{mockData.operations[i].executions}</td>
      </tr>,
    );
  }

  return (
    <div>
      <table className='border-1 w-full items-center border border-slate-400'>
        <thead className='bg-slate-200'>
          <tr>
            <th className='px-10 py-4'>Action</th>
            <th className='px-10 py-4'>Duration (ms)</th>
            <th className='px-10 py-4'>Kind</th>
            <th className='px-10 py-4'>No. of Traces</th>
            <th className='px-6 py-4'>No. of Executions</th>
          </tr>
        </thead>
        <tbody className='text-center'>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
