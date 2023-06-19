import Feature from '../../components/Feature';
import Button from '../../components/Button';
import github from '../../assets/GitHub_Logo_White.png';
import githubIcon from '../../assets/github-mark-white.svg';
import { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineWrenchScrewdriver, HiOutlineChartBar } from 'react-icons/hi2';
import { IoTelescopeOutline } from 'react-icons/io5';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import telescope from '../../assets/telescope.png';

const Features = () => {
  const [starCount, setstarCount] = useState(0);

  const getStars = () => {
    fetch('https://api.github.com/repos/oslabs-beta/NextView', {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('HTTP error ' + res.status);
        }
        return res.json();
      })
      .then((res) => {
        if (res.stargazers_count) {
          setstarCount(res.stargazers_count);
        }
      })
      .catch((err) => console.log('Authenticate: ERROR: ', err));
  };

  useEffect(() => getStars(), []);

  return (
    <section className='relative bg-primary px-4 pb-16 pt-20 sm:px-[max((100vw-1500px)/2,48px)] lg:pt-0'>
      <div className='grid-cols-16 mb-6 grid'>
        <img
          src={telescope}
          className='relative col-span-3 row-start-1 hidden max-h-72 drop-shadow-xl lg:block'
        />
        <h3 className='col-span-4 row-start-2 mb-3 whitespace-nowrap text-2xl font-bold'>
          What is NextView?
        </h3>
        <div className='col-span-8 row-start-3 grid grid-cols-12 gap-6 overflow-auto pb-9  md:col-span-3'>
          <p className='col-span-12 text-sm leading-6 md:col-span-10 lg:col-span-6'>
            NextView is an observability platform for building and optimizing
            Next.js applications. NextView assists developers by providing an
            easy-to-use and lightweight toolkit for measuring performance of
            server-side rendering requests.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-6  '>
        <Feature>
          <IoTelescopeOutline size={30} />
          <h2 className='mb-2 font-bold'>Next.js Instrumentation</h2>
          <p className='text-xs leading-5 text-gray-600'>
            With our hassle-free npm package integration, effortlessly track and
            analyze trace data in your Next.js application, empowering you to
            gain valuable insights and optimize performance in no time.
          </p>
        </Feature>
        <Feature>
          <HiOutlineChartBar size={30} />
          <h2 className='mb-2 font-bold'>Traffic Analysis</h2>
          <p className='text-xs leading-5 text-gray-600'>
            Gain insights into your application's usage patterns, identify
            trends, and make informed decisions for optimizing your server-side
            rendering infrastructure.
          </p>
        </Feature>
        <Feature>
          <HiOutlineWrenchScrewdriver size={30} />
          <h2 className='mb-2 font-bold'>Performance Monitoring</h2>
          <p className='text-xs leading-5 text-gray-600'>
            By providing detailed performance data over customizable
            time-ranges, you can identify performance bottlenecks and optimize
            your applications for better user experience.
          </p>
        </Feature>
        <Feature>
          <AiOutlineSecurityScan size={30} />
          <h2 className='mb-2 font-bold'>Secure Authentication</h2>
          <p className='text-xs leading-5 text-gray-600'>
            Safeguard your data with our robust encryption using bcrypt. Rest
            easy knowing that sensitive user information is securely stored,
            providing peace of mind and protection against unauthorized access.
          </p>
        </Feature>
      </div>
      <div className='mt-16 flex items-center justify-center'>
        {/* TODO: REPLACE WITH MEDIUM LINK */}
        <a href='' target='_blank' rel='noopener' aria-label='Medium Link'>
          <Button className='bg-white drop-shadow-sm'>Learn more</Button>
        </a>

        <a
          href='https://github.com/oslabs-beta/NextView'
          target='_blank'
          rel='noopener'
          aria-label='Medium Link'
        >
          <div className='flex flex-row drop-shadow-sm hover:brightness-95'>
            <Button
              className='border-1 mr-0 flex h-8 w-24 flex-row items-center justify-evenly rounded-r-none hover:brightness-100'
              variant='secondary'
            >
              <img className='h-5' src={githubIcon} />
              <img className='h-6' src={github} />
            </Button>
            <Button className='border-1 ml-0 flex h-8 items-center justify-evenly gap-1 rounded-l-none border-l-0 p-1 hover:border-gray-300'>
              <FaRegStar size={'15'} className='relative bottom-[1px]' />
              {starCount}
            </Button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Features;
