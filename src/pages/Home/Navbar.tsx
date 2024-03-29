import AuthContainer from './Auth/AuthContainer';

interface Props {
  installationScroll(): void;
  contributorsScroll(): void;
}

const Navbar: React.FC<Props> = ({
  installationScroll,
  contributorsScroll,
}) => {
  return (
    <div className='header fixed left-0 right-0 z-50 mx-auto flex h-16 w-full flex-row justify-between border-b bg-white sm:px-[max((100vw-1500px)/2,0px)]'>
      <div
        id='header-left'
        className='mx-3 flex flex-row items-center justify-between gap-4 text-sm'
      >
        <a href={'/'} className='min-w-max'>
          <img
            src={
              'https://ik.imagekit.io/4ys419c44/NextView-logo-pink-transparent.webp?updatedAt=1692136903989'
            }
            alt='nextview-logo'
            className='h-11 w-11 transition duration-200 hover:scale-105'
          ></img>
        </a>
        <div className='hidden md:block'>
          <div
            onClick={installationScroll}
            className='cursor-pointer px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>Get Started</span>
          </div>
        </div>
        <div className=' hidden md:block'>
          <div
            onClick={contributorsScroll}
            className='cursor-pointer px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>Contributors</span>
          </div>
        </div>
        <div className='hidden md:block'>
          <a
            href='https://medium.com/@evramdawd/introducing-nextview-a-next-js-observability-platform-2a010fcc39'
            target='_blank'
            rel='noopener'
            aria-label='Blog Link'
            className='cursor-pointer px-3 font-semibold text-gray-500 hover:text-gray-800'
          >
            <span>Blog</span>
          </a>
        </div>
        <div className='hidden px-3 md:block'>
          <a
            href='https://github.com/oslabs-beta/NextView'
            target='_blank'
            rel='noopener'
            aria-label='Github'
          >
            <img
              loading='lazy'
              src={
                'https://ik.imagekit.io/4ys419c44/github-mark.webp?updatedAt=1692136904657'
              }
              alt='github-logo'
              className='h-6 transition duration-200 hover:scale-105'
            />
          </a>
        </div>
        <div className='hidden px-3 md:block'>
          <a
            href='https://www.npmjs.com/package/nextview-tracing'
            target='_blank'
            rel='noopener'
            aria-label='npm'
          >
            <img
              src={
                'https://ik.imagekit.io/4ys419c44/npm-black.png?updatedAt=1692136904416'
              }
              alt='npm-logo'
              className='relative top-[1px] h-3 transition duration-200 hover:scale-105'
            />
          </a>
        </div>
      </div>
      <div id='header-right' className='flex items-center'>
        <div className=''>
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
