import kinski from '../../assets/kinski.png';
import eduardo from '../../assets/eduardo.png';
import evram from '../../assets/evram.png';
import scott from '../../assets/scott.png';
import sooji from '../../assets/sooji.png';
import linkedin from '../../assets/linked-in.png';
import github from '../../assets/github-mark.svg';
import hands from '../../assets/hands.png';

const Contributors = () => {
  return (
    <footer className='border-t bg-white px-4 pb-28 pt-20 sm:px-[max((100vw-1500px)/2,48px)]'>
      <div className='flex items-center gap-2'>
        <h3 className='text-4xl font-bold'>Contributors</h3>
        <img src={hands} className='h-12' />
      </div>
      <div className='mt-12 grid grid-cols-10 gap-6 text-center'>
        {/* TODO: Modularize these profiles into component */}
        <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-5 lg:col-span-2'>
          <img src={eduardo} className='max-h-64 drop-shadow-xl' />
          <div className='flex flex-col whitespace-nowrap'>
            <span className='text-xl font-bold '>Eduardo Zayas</span>
            <span className='text-l'>Software Engineer</span>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/eduardo-zayas-avila/'
              target='_blank'
              rel='noopener'
              aria-label='linkedin'
            >
              <img
                src={linkedin}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
            <a
              href='https://github.com/eza16'
              target='_blank'
              rel='noopener'
              aria-label='Github'
            >
              <img
                src={github}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
          </div>
        </div>
        <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-5 lg:col-span-2'>
          <img src={evram} className='max-h-64 drop-shadow-md' />
          <div className='flex flex-col whitespace-nowrap'>
            <span className='text-xl font-bold '>Evram Dawd</span>
            <span className='text-l'>Software Engineer</span>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/evram-d-905a3a2b/'
              target='_blank'
              rel='noopener'
              aria-label='linkedin'
            >
              <img
                src={linkedin}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
            <a
              href='https://github.com/evramdawd'
              target='_blank'
              rel='noopener'
              aria-label='Github'
            >
              <img
                src={github}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
          </div>
        </div>
        <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-5 lg:col-span-2'>
          <img src={kinski} className='max-h-64 drop-shadow-md' />
          <div className='flex flex-col whitespace-nowrap'>
            <span className='text-xl font-bold '>Kinski (Jiaxin) Wu</span>
            <span className='text-l'>Software Engineer</span>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/kinskiwu/'
              target='_blank'
              rel='noopener'
              aria-label='linkedin'
            >
              <img
                src={linkedin}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
            <a
              href='https://github.com/kinskiwu'
              target='_blank'
              rel='noopener'
              aria-label='Github'
            >
              <img
                src={github}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
          </div>
        </div>
        <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-5 lg:col-span-2'>
          <img src={scott} className='max-h-64 drop-shadow-md' />
          <div className='flex flex-col whitespace-nowrap'>
            <span className='text-xl font-bold '>Scott Brasko</span>
            <span className='text-l'>Software Engineer</span>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/scott-brasko/'
              target='_blank'
              rel='noopener'
              aria-label='linkedin'
            >
              <img
                src={linkedin}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
            <a
              href='https://github.com/Scott-Brasko'
              target='_blank'
              rel='noopener'
              aria-label='Github'
            >
              <img
                src={github}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
          </div>
        </div>
        <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-10 lg:col-span-2'>
          <img src={sooji} className='max-h-64 drop-shadow-md' />
          <div className='flex flex-col whitespace-nowrap'>
            <span className='text-xl font-bold '>SooJi Kim</span>
            <span className='text-l'>Software Engineer</span>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/sooji-suzy-kim/'
              target='_blank'
              rel='noopener'
              aria-label='linkedin'
            >
              <img
                src={linkedin}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
            <a
              href='https://github.com/sjk06'
              target='_blank'
              rel='noopener'
              aria-label='Github'
            >
              <img
                src={github}
                className='h-7 transition duration-200 hover:scale-105'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contributors;
