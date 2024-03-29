import { useContext, useEffect, useRef, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import Button from '../../../components/Button';
import { CopyInput } from '../../../components/CopyInput';
import { APIContext } from '../../../contexts/dashboardContexts';
// import { IoLogOut, IoMenu } from 'react-icons/io5';
// import { UserContext } from '../../../contexts/userContexts';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../../assets/NextView-logo-pink-transparent.webp';
// import PageTab from '../Sidebar/PageTab';
// import { v4 as uuidv4 } from 'uuid';

const Topbar = ({ setStart, setEnd, overviewData }) => {
  const [startVal, setStartVal] = useState('');
  const [endVal, setEndVal] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const { apiKey } = useContext(APIContext);

  // Set local variables (startVal, endVal)
  const handleDateChange = (date, setDate) => {
    setDate(date.toISOString());
  };

  // Set Dashboard state variables (start, end)
  const handleClick = () => {
    setStart(startVal);
    setEnd(endVal);
  };

  // const pagesList = overviewData.pages;

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setTimeout(() => setDropdown(false), 100);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='flex h-16 w-full flex-row items-center justify-between border-b bg-[#f6f8fa]'>
        <div className='ml-4 flex min-w-0 items-center gap-2'>
          <span className='hidden whitespace-nowrap text-sm font-semibold xl:flex'>
            API Key:
          </span>
          <CopyInput
            text={apiKey}
            className='hidden w-32 bg-white md:flex lg:w-auto'
          >
            {apiKey}
          </CopyInput>
          {/* <a
            href='/'
            className='min-w-[2.5rem] max-w-[2.5rem] transition duration-200 hover:scale-105 md:hidden'
          >
            <img src={logo} alt='nextview-logo' className=''></img>
          </a>
          <div className='pl-2 sm:hidden'>
            <IoMenu
              size='28'
              className='cursor-pointer'
              onClick={() => setDropdown(true)}
            />
            {dropdown ? (
              <div
                ref={wrapperRef}
                className='absolute z-50 flex flex-col border bg-white'
              >
                <Button
                  variant='secondary'
                  className='mt-5 h-10 w-[90%] bg-secondary text-base drop-shadow-sm'
                >
                  <Link to='/dashboard' className=''>
                    Dashboard
                  </Link>
                </Button>
                <span className='w-11/12 border-b p-2 font-bold'>Pages</span>
                {pagesList.toReversed().map((page) => (
                  <PageTab key={uuidv4()} page={page} />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div> */}
        </div>
        <div className='flex flex-shrink-[25] items-center justify-end gap-x-3 px-4'>
          <DateTimePicker
            defaultValue={dayjs().subtract(1, 'day')}
            slotProps={{ textField: { size: 'small' } }}
            sx={{ backgroundColor: 'white', input: { fontSize: '.9rem' } }}
            onChange={(value) => {
              handleDateChange(value, setStartVal);
            }}
          />
          <DateTimePicker
            defaultValue={dayjs()}
            slotProps={{ textField: { size: 'small' } }}
            sx={{ backgroundColor: 'white', input: { fontSize: '.9rem' } }}
            onChange={(value) => {
              handleDateChange(value, setEndVal);
            }}
          />
          <Button
            variant='secondary'
            className='h-10 border bg-accent font-semibold'
            onClick={handleClick}
          >
            Apply
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Topbar;
