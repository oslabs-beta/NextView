import Feature from '../../components/Feature';
import Button from '../../components/Button';
import github from '../../assets/GitHub_Logo_White.png';
import githubIcon from '../../assets/github-mark-white.svg';
import star from '../../assets/star.png';
import { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const Features = () => {
  const [starCount, setstarCount] = useState(0);

  const getStars = () => {
    console.log('hello');
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
    <section className='bg-primary px-[max((100vw-1500px)/2,48px)] pb-16 pt-20'>
      <div className=''>
        <h3 className='mb-3 text-2xl font-bold'>What is NextView?</h3>
        <div className='grid grid-cols-12 overflow-auto pb-9'>
          <p className='col-span-12 text-sm md:col-span-6'>
            NextView is an observability platform for building and optimizing
            Next.js applications. NextView assists developers by providing an
            easy-to-use and lightweight toolkit for measuring performance of
            server-side rendering requests.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6'>
        <Feature>
          <h2>Feature 1</h2>
        </Feature>
        <Feature>
          <h2>Feature 2</h2>
        </Feature>
        <Feature>
          <h2>Feature 3</h2>
        </Feature>
        <Feature>
          <h2>Feature 4</h2>
        </Feature>
      </div>
      <div className='mt-16 flex items-center justify-center'>
        {/* TODO: REPLACE WITH MEDIUM LINK */}
        <a href='' target='_blank' rel='noopener' aria-label='Medium Link'>
          <Button className='bg-primary'>Learn more</Button>
        </a>

        <a
          href='https://github.com/oslabs-beta/NextView'
          target='_blank'
          rel='noopener'
          aria-label='Medium Link'
        >
          <div className='flex flex-row hover:brightness-95'>
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
