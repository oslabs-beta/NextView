const Table = ({ overallPageData }) => {
  const tableData = [];
  for (let i = 0; i < overallPageData.length; i++) {
    tableData.push(
      <tr>
        <td className='p-3'>{overallPageData[i].Name}</td>
        <td className='p-3'>{overallPageData[i]['Avg. duration (ms)']}</td>
        <td className='p-3'>{overallPageData[i].Kind}</td>
        <td className='p-3'>{overallPageData[i]['Total no. of traces']}</td>
        <td className='p-3'>{overallPageData[i]['Total no. of executions']}</td>
      </tr>,
    );
  }

  return (
    <div className='text-md col-span-12 ml-auto mr-auto p-5 xl:col-span-8'>
      <table className='border-1 items-center border border-slate-400 '>
        <thead className='bg-slate-200'>
          <tr>
            <th className=' py-4'>Name</th>
            <th className='py-4'>Duration (ms)</th>
            <th className='px-4 py-4'>Kind</th>
            <th className='px-4 py-4'>No. of Traces</th>
            <th className='px-4 py-4'>No. of Executions</th>
          </tr>
        </thead>
        <tbody className='text-center text-sm'>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
