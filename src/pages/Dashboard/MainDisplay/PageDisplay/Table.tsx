import { v4 as uuidv4 } from 'uuid';

const Table = ({ overallPageData }) => {
  const tableData = [];
  for (let i = 0; i < overallPageData.length; i++) {
    tableData.push(
      <tr key={overallPageData[i].Name} className='text-left text-sm'>
        <td
          className='w-1/3 max-w-[30px] overflow-x-auto border-b border-r p-2'
          key={uuidv4()}
        >
          <div className='w-full overflow-auto pb-2'>
            {overallPageData[i].Name}
          </div>
        </td>
        <td className='w-28 border-b border-r p-3' key={uuidv4()}>
          {overallPageData[i]['Avg. duration (ms)'] + 'ms'}
        </td>
        <td className='w-28 border-b border-r p-3' key={uuidv4()}>
          {overallPageData[i].Kind}
        </td>
        <td className='w-28 border-b border-r p-3' key={uuidv4()}>
          {overallPageData[i]['Total no. of traces']}
        </td>
        <td className='w-24 border-b p-3' key={uuidv4()}>
          {overallPageData[i]['Total no. of executions']}
        </td>
      </tr>,
    );
  }

  return (
    <table className='w-full overflow-hidden rounded-xl bg-white text-left drop-shadow-sm'>
      <thead className='border-b bg-secondary'>
        <tr key={'header'} className='text-sm text-white'>
          <th className='px-1 py-4 '>Name</th>
          <th className='px-1 py-4'>Avg. Duration</th>
          <th className='px-1 py-4'>Kind</th>
          <th className='px-1 py-4'>No. of Traces</th>
          <th className='px-1 py-4'>No. of Executions</th>
        </tr>
      </thead>
      <tbody className='text-sm'>{tableData}</tbody>
    </table>
  );
};

export default Table;
