import { Fragment, useState, useContext } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BsCheck2, BsChevronDoubleDown } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { PeriodContext } from './Contexts';

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

interface Period {
  interval: number;
  unit: string;
}

interface PeriodContextType {
  period: Period;
  setPeriod: (value: Period) => void;
}

const DropdownList = () => {
  const periodContext = useContext<PeriodContextType>(
    PeriodContext as React.Context<PeriodContextType>,
  );
  const { period, setPeriod } = periodContext;
  console.log('variables', { period, setPeriod });

  return (
    <div className='fixed top-16 w-60'>
      <Listbox value={`${period.interval} hours`} onChange={setPeriod}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{`${period.interval} hours`}</span>
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
              {durationList.map((duration) => (
                <Listbox.Option
                  key={uuidv4()}
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
