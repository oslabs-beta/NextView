import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BsCheck2, BsChevronDoubleDown } from 'react-icons/bs';

//TODO:add handle onClick functionality to trigger post & get requests
//TODO:styling

const durationList = [
  '1 hour',
  '3 hours',
  '6 hours',
  '12 hours',
  '24 hours',
  '3 days',
  '7 days',
  '30 days',
];

const DropdownList = () => {
  //TODO: to replaced by React context
  const [period, setPeriod] = useState('24 hours');

  // const [data, setData] = useState({});

  // const fetchData = () => {

  //   let interval:number;
  //   let unit:string;

  //   switch(period){
  //     case '1 hour' :
  //       interval = 1;
  //       unit = 'h';
  //       break;
  //     case '3 hours' :
  //       interval = 3;
  //       unit = 'h';
  //       break;
  //     case '6 hours' :
  //       interval = 6;
  //       unit = 'h';
  //       break;
  //     case '12 hours' :
  //       interval = 12;
  //       unit = 'h';
  //       break;
  //     case '24 hours' :
  //       interval = 24;
  //       unit = 'h';
  //       break;
  //     case '3 days' :
  //       interval = 3;
  //       unit = 'd';
  //       break;
  //     case '7 days' :
  //       interval = 7;
  //       unit = 'd';
  //       break;
  //     case '30 days' :
  //       interval = 30;
  //       unit = 'd';
  //       break;
  //     default:
  //       interval = 24;
  //       unit = 'h';
  //   }

  //   console.log(period);

  //   //TODO: update setState using React context
  //   fetch(`/apps/{process.env.API_KEY}/data?interval=${interval}&unit=${unit}`)
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log('data', data);
  //       setData(data);
  //   })
  //   .catch(error => console.log('Data fetching failed', error));

  // }

  return (
    <div className='fixed top-16 w-60'>
      <Listbox value={period} onChange={setPeriod}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{period}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <BsChevronDoubleDown
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {durationList.map((duration, durationId) => (
                <Listbox.Option
                  key={durationId}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={duration}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {duration}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <BsCheck2 className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropdownList;
