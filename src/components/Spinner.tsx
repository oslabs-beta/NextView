const Spinner = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden opacity-75'>
      <div
        className='absolute h-12 w-12 rounded-full
    border-2 border-dashed border-gray-200'
      ></div>
      <div
        className='absolute h-12 w-12 animate-spin rounded-full
    border-2 border-dashed border-secondary border-t-transparent'
      ></div>
      <h2 className='m-2 text-center text-lg text-secondary'>Loading...</h2>
    </div>
  );
};

export default Spinner;
