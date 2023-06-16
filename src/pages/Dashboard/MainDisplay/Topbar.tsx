// import * as React from 'react';
import { useState, useContext } from 'react';
// import DropdownList from '../MainDisplay/DropdownList';
import logo from '../../../assets/logo2.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import {
  StartContext,
  EndContext,
  PeriodContext,
  BarGraphContext,
  OVLineChartContext,
  PieChartContext,
  TraceTextboxContext,
  DurationTextboxContext,
  LineDataItem,
  BarDataItem,
  PieDataItem,
  PeriodContextType,
  StartContextType,
  EndContextType,
} from '../../../contexts/dashboardContexts';

const Topbar = () => {
  const startContext = useContext(
    StartContext as React.Context<StartContextType>,
  );
  const { start, setStart } = startContext;

  const endContext = useContext(EndContext as React.Context<EndContextType>);
  const { end, setEnd } = endContext;

  const handleClick = () => {
    console.log('submit');
    // setPeriod({interval: 30, unit: 'h'})
    console.log({ start, end });
    // console.log(dayjs().subtract(1, 'day').toISOString())
  };

  const handleDateChange = (date, fn) => {
    fn(date.toISOString());
    // console.log({start}, {end}, {timezone: Intl.DateTimeFormat().resolvedOptions().timeZone});
    // console.log({ start, end });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <div className='flex h-16 justify-end gap-x-10 bg-neutral-300 px-4'>
          <div className='flex items-center gap-x-3'>
            {/* <p>The Past </p> */}
            {/* <DropdownList /> */}
            <DateTimePicker
              label={'start'}
              onChange={(value) => {
                handleDateChange(value, setStart);
              }}
            />
            <DateTimePicker
              label={'end'}
              onChange={(value) => {
                handleDateChange(value, setEnd);
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

// const handleClick = async () => {
//   try {
//     console.log('try');
//     const response = await fetch(
//       `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?start=${start}&end=${end}`, {
//         headers: {
//           'User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
//       }
//   });
//     const data = await response.json();
//     console.log(data);
//     setTraceCount(data.traceCount);
//     setOverallAvgDuration(data.overallAvg);
//     setBarData(data.pageAvgDurations);
//     setPieData(data.kindAvgDurations);
//     setLineData(data.kindAvgDurationsOverTime);
//     // console.log(data);
//     setIsLoading(false);
//   } catch (error: unknown) {
//     console.log('Data fetching failed', error);
//   }
// };

// useEffect(() => {
//   const fetchData = async () => {
//     //add switch statement
//     try {
//       const response = await fetch(
//         `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?interval=${start}&unit=${end}`,
//       );
//       const data = await response.json();
//       // console.log(data);
//       // setTextboxData({overallAvg: data.overallAvg, traceCount: data.traceCount});
//       setTraceCount(data.traceCount);
//       setOverallAvgDuration(data.overallAvg);
//       setBarData(data.pageAvgDurations);
//       setPieData(data.kindAvgDurations);
//       setLineData(data.kindAvgDurationsOverTime);
//       // console.log(data);
//       setIsLoading(false);
//     } catch (error: unknown) {
//       console.log('Data fetching failed', error);
//     }
//   };
//   fetchData();
// }, [start, end]);
