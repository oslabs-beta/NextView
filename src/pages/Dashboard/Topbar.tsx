const text = 'Summary';
import { Dropdown, Ripple, initTE } from 'tw-elements';

import { FaClock } from 'react-icons/fa';
initTE({ Dropdown, Ripple });

const Topbar = () => {
  return (
    <div className='flex h-16 w-screen items-end bg-neutral-300 px-4'>
      <p className='header'>{text}</p>
      <div class='relative' data-te-dropdown-ref>
        <button
          class='bg-primary-100 text-primary-700 hover:bg-primary-accent-100 focus:bg-primary-accent-100 active:bg-primary-accent-200 flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none'
          type='button'
          id='dropdownMenuButton4'
          data-te-dropdown-toggle-ref
          aria-expanded='false'
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          <FaClock />
          24 hours
          <span class='ml-2 w-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              class='h-5 w-5'
            >
              <path
                fill-rule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clip-rule='evenodd'
              />
            </svg>
          </span>
        </button>
        <ul
          class='absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'
          aria-labelledby='dropdownMenuButton4'
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              class='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600'
              href='#'
              data-te-dropdown-item-ref
            >
              3 days
            </a>
          </li>
          <li>
            <a
              class='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600'
              href='#'
              data-te-dropdown-item-ref
            >
              7 days
            </a>
          </li>
          <li>
            <a
              class='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600'
              href='#'
              data-te-dropdown-item-ref
            >
              start X; end Y
            </a>
          </li>
        </ul>
      </div>
      <div>NextView Logo</div>
    </div>
  );
};

export default Topbar;
