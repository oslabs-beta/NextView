const Table = ({ overallPageData }) => {
  const tableData = [];
  for (let i = 0; i < overallPageData.length; i++) {
    tableData.push(
      <tr>
        <td className='py-3'>{overallPageData[i].Name}</td>
        <td className='py-3'>{overallPageData[i]['Avg. duration (ms)']}</td>
        <td className='py-3'>{overallPageData[i].Kind}</td>
        <td className='py-3'>{overallPageData[i]['Total no. of traces']}</td>
        <td className='py-3'>
          {overallPageData[i]['Total no. of executions']}
        </td>
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
