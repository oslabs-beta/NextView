// import linkedin from '../../assets/linked-in.png';
// import github from '../../assets/github-mark.webp';

interface ContributorProps {
  name: string;
  image: string;
  linkedinLink: string;
  githubLink: string;
}

const Contributor: React.FC<ContributorProps> = ({
  name,
  image,
  linkedinLink,
  githubLink,
}) => {
  return (
    <div className='col-span-10 flex flex-col items-center gap-3 drop-shadow-md sm:col-span-5 lg:col-span-2'>
      <img loading='lazy' src={image} className='max-h-64 drop-shadow-xl' />
      <div className='flex flex-col whitespace-nowrap'>
        <span className='text-xl font-bold '>{name}</span>
        <span className='text-l'>Software Engineer</span>
      </div>
      <div className='flex gap-4'>
        <a
          href={linkedinLink}
          target='_blank'
          rel='noopener'
          aria-label='linkedin'
        >
          <img
            src={
              'https://ik.imagekit.io/4ys419c44/linked-in.png?updatedAt=1692136904263'
            }
            className='h-7 transition duration-200 hover:scale-105'
          />
        </a>
        <a href={githubLink} target='_blank' rel='noopener' aria-label='Github'>
          <img
            loading='lazy'
            src={
              'https://ik.imagekit.io/4ys419c44/github-mark.webp?updatedAt=1692136904657'
            }
            className='h-7 transition duration-200 hover:scale-105'
          />
        </a>
      </div>
    </div>
  );
};

export default Contributor;
