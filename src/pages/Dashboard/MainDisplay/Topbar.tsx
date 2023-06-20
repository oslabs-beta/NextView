import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const Topbar = ({ setStart, setEnd }) => {
  const [startVal, setStartVal] = useState('');
  const [endVal, setEndVal] = useState('');

  const startPlaceholder = dayjs()
    .subtract(1, 'day')
    .format('DD/MM/YYYY HH:mm A');

  const endPlaceholder = dayjs().format('DD/MM/YYYY HH:mm A');

  const handleClick = () => {
    setStart(startVal);
    setEnd(endVal);
  };

  const handleDateChange = (newDate, setStartOrEnd) => {
    setStartOrEnd(newDate.toISOString());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='flex h-16 justify-end gap-x-10 border-b bg-[#f6f8fa] p-10 px-4'>
        <div className='flex items-center gap-x-3'>
          <DateTimePicker
            sx={{ backgroundColor: 'white' }}
            onChange={(value) => {
              handleDateChange(value, setStartVal);
            }}
          />
          <DateTimePicker
            sx={{ backgroundColor: 'white' }}
            onChange={(value) => {
              handleDateChange(value, setEndVal);
            }}
          />
          <button
            className='rounded border border-gray-300 bg-white p-[15px] px-3 hover:border-gray-700'
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Topbar;
