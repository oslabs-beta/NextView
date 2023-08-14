import kinski from '../../assets/kinski.webp';
import eduardo from '../../assets/eduardo.webp';
import evram from '../../assets/evram.webp';
import scott from '../../assets/scott.webp';
import sooji from '../../assets/sooji.webp';
import hands from '../../assets/hands.webp';
import Contributor from './Contributor';
import { v4 as uuid } from 'uuid';

const contributorsData = [
  {
    name: 'Eduardo Zayas',
    image: eduardo,
    linkedinLink: 'https://www.linkedin.com/in/eduardo-zayas-avila/',
    githubLink: 'https://github.com/eza16',
  },
  {
    name: 'Evram Dawd',
    image: evram,
    linkedinLink: 'https://www.linkedin.com/in/evram-d-905a3a2b/',
    githubLink: 'https://github.com/evramdawd',
  },
  {
    name: 'Kinski (Jiaxin) Wu',
    image: kinski,
    linkedinLink: 'https://www.linkedin.com/in/kinskiwu/',
    githubLink: 'https://github.com/kinskiwu',
  },
  {
    name: 'Scott Brasko',
    image: scott,
    linkedinLink: 'https://www.linkedin.com/in/scott-brasko/',
    githubLink: 'https://github.com/Scott-Brasko',
  },
  {
    name: 'SooJi Kim',
    image: sooji,
    linkedinLink: 'https://www.linkedin.com/in/sooji-suzy-kim/',
    githubLink: 'https://github.com/sjk06',
  },
];

const Contributors: React.FC = () => {
  return (
    <footer className='border-t bg-white px-4 pb-28 pt-20 sm:px-[max((100vw-1500px)/2,48px)]'>
      <div className='flex items-center gap-2'>
        <h3 className='text-4xl font-bold'>Contributors</h3>
        <img src={hands} className='h-12' />
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
