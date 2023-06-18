import Feature from '../../components/Feature';
import Button from '../../components/Button';

const Features = () => {
  return (
    <section className='bg-primary px-[max((100vw-1500px)/2,48px)] pb-16 pt-20'>
      <div className=''>
        <h3 className='mb-3 text-2xl font-bold'>What is NextView?</h3>
        <div className='grid grid-cols-12 pb-9'>
          <p className='col-span-6 text-sm'>
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
      <div className='mt-16 flex justify-center'>
        {/* TODO: REPLACE WITH MEDIUM LINK */}
        <a href='' target='_blank' rel='noopener' aria-label='Medium Link'>
          <Button className='bg-primary'>Learn more</Button>
        </a>
      </div>
    </section>
  );
};

export default Features;
