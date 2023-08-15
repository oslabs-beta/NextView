import Contributor from './Contributor';
import { v4 as uuid } from 'uuid';

const contributorsData = [
  {
    name: 'Eduardo Zayas',
    image:
      'https://ik.imagekit.io/4ys419c44/eduardo.webp?updatedAt=1692136903252',
    linkedinLink: 'https://www.linkedin.com/in/eduardo-zayas-avila/',
    githubLink: 'https://github.com/eza16',
  },
  {
    name: 'Evram Dawd',
    image:
      'https://ik.imagekit.io/4ys419c44/evram.webp?updatedAt=1692136903569',
    linkedinLink: 'https://www.linkedin.com/in/evram-d-905a3a2b/',
    githubLink: 'https://github.com/evramdawd',
  },
  {
    name: 'Kinski (Jiaxin) Wu',
    image:
      'https://ik.imagekit.io/4ys419c44/kinski.webp?updatedAt=1692136903472',
    linkedinLink: 'https://www.linkedin.com/in/kinskiwu/',
    githubLink: 'https://github.com/kinskiwu',
  },
  {
    name: 'Scott Brasko',
    image:
      'https://ik.imagekit.io/4ys419c44/scott.webp?updatedAt=1692136903515',
    linkedinLink: 'https://www.linkedin.com/in/scott-brasko/',
    githubLink: 'https://github.com/Scott-Brasko',
  },
  {
    name: 'SooJi Kim',
    image:
      'https://ik.imagekit.io/4ys419c44/sooji.webp?updatedAt=1692136903364',
    linkedinLink: 'https://www.linkedin.com/in/sooji-suzy-kim/',
    githubLink: 'https://github.com/sjk06',
  },
];

const Contributors: React.FC = () => {
  return (
    <footer className='border-t bg-white px-4 pb-28 pt-20 sm:px-[max((100vw-1500px)/2,48px)]'>
      <div className='flex items-center gap-2'>
        <h3 className='text-4xl font-bold'>Contributors</h3>
        <img
          src={
            'https://ik.imagekit.io/4ys419c44/hands.webp?updatedAt=1692136904246'
          }
          className='h-12'
        />
      </div>
      <div className='mt-12 grid grid-cols-10 gap-6 text-center'>
        {contributorsData.map((contributor) => (
          <Contributor
            key={uuid()}
            name={contributor.name}
            image={contributor.image}
            linkedinLink={contributor.linkedinLink}
            githubLink={contributor.githubLink}
          />
        ))}
      </div>
    </footer>
  );
};

export default Contributors;
