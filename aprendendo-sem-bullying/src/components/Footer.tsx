import logoImage from '../public/logo_project.png';
import logoIfsul from '../public/ifrs.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-header px-7 py-7'>
      <div>
        <ul className='flex flex-col lg:flex-row justify-between items-center p-5'>
          <li className='mb-4'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logoImage} alt='Project Logo image' className='h-14 cursor-pointer' />
            </Link>
          </li>
          <li className='mb-4'>
            <a href='http://www.ifsul.edu.br' target='_blank' rel='noopener noreferrer'>
              <img src={logoIfsul} alt='IFSUl Logo Image' className='h-12' />
            </a>
          </li>
          <li className='text-color-text font-custom mb-4'>@2023 Aprendendo Sem Bullying</li>
          <li className='text-color-text font-custom mb-4'>Sobre Nós</li>
          <li className='text-color-text font-custom mb-4'>Política de Privacidade</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
