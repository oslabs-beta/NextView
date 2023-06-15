// import * as React from 'react';
import { useState, useEffect } from 'react';
// import DropdownList from '../MainDisplay/DropdownList';
import logo from '../../../assets/logo2.png';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs, { Dayjs } from 'dayjs';
import {
  PeriodContext,
  BarGraphContext,
  LineChartContext,
  PieChartContext,
  TraceTextboxContext,
  DurationTextboxContext,
  LineDataItem,
  BarDataItem,
  PieDataItem,
} from '../../../contexts/dashboardContexts';

const Topbar = () => {
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);
  const [traceCount, setTraceCount] = useState(0);
  const [overallAvgDuration, setOverallAvgDuration] = useState(0);
  const [barData, setBarData] = useState<BarDataItem[] | undefined>(undefined);
  const [lineData, setLineData] = useState<LineDataItem[] | undefined>(
    undefined,
  );
  const [pieData, setPieData] = useState<PieDataItem[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const handleDateChange = (date, fn) => {
    fn(date.toISOString());
    // console.log({start}, {end}, {timezone: Intl.DateTimeFormat().resolvedOptions().timeZone});
    console.log({ start, end });
  };

  const handleClick = async () => {
    try {
      console.log('try');
      const response = await fetch(
        `/apps/5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d/data?interval=${start}&unit=${end}`,
      );
      const data = await response.json();
      console.log(data);
    } catch (error: unknown) {
      console.log('Data fetching failed', error);
    }
  };

  // const handleClick = () => {
  //   console.log('submit');
  // }

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
