import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useState } from 'react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const itemList = [];

const durationList = ['30 minutes', '60 minutes', '24 hours', '1 day'];

for (const duration of durationList) {
  itemList.push(
    <Menu.Item>
      {({ active }) => (
        <a
          href='#'
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'block px-4 py-2 text-sm',
          )}
        >
          {duration}
        </a>
      )}
    </Menu.Item>,
  );
}

const DropdownList = () => {
  const [duration, setDuration] = useState('24 hours');

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 bg-neutral-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          {duration}
          <BsChevronDoubleDown
            className='-mr-1 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {itemList}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownList;
