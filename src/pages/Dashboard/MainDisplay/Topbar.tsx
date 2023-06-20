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
      <div>
        <div className='flex h-16 justify-end gap-x-10 bg-neutral-300 px-4'>
          <div className='flex items-center gap-x-3'>
            <DateTimePicker
              label={startPlaceholder}
              onChange={(value) => {
                handleDateChange(value, setStartVal);
              }}
            />
            <DateTimePicker
              label={endPlaceholder}
              onChange={(value) => {
                handleDateChange(value, setEndVal);
              }}
            />
            <button onClick={handleClick}>submit</button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Topbar;
