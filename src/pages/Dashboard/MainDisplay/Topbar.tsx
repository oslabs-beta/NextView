import { useState, useContext } from 'react';
import logo from '../../../assets/logo2.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs, { Dayjs } from 'dayjs';
import {
  StartContext,
  EndContext,
  StartContextType,
  EndContextType,
} from '../../../contexts/dashboardContexts';

const Topbar = () => {
  const { setStart } = useContext(
    StartContext as React.Context<StartContextType>,
  );
  const { setEnd } = useContext(EndContext as React.Context<EndContextType>);

  const [startVal, setStartVal] = useState('');
  const [endVal, setEndVal] = useState('');

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
              label={'start'}
              onChange={(value) => {
                handleDateChange(value, setStartVal);
              }}
            />
            <DateTimePicker
              label={'end'}
              onChange={(value) => {
                handleDateChange(value, setEndVal);
              }}
            />
            <button onClick={handleClick}>submit</button>
          </div>
          <div className='flex justify-end'>
            <img src={logo} alt='nextview-logo' className='h-22 w-22'></img>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Topbar;
