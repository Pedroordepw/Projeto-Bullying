import React from 'react';
import logoImage from '../public/logo_project.png';
import logoIfsul from '../public/ifrs.png';

const Footer = () => {
  return (
    <div className='bg-header px-7 py-7'>
      <div>
        <ul className='flex flex-col md:flex-row justify-between items-center p-5'>
          <li className='mb-4 md:mb-0'>
            <img src={logoImage} alt='Project Logo image' className='h-14' />
          </li>
          <li className='mb-4 md:mb-0'>
            <img src={logoIfsul} alt='IFSUl Logo Image' className='h-12' />
          </li>
          <li className='text-color-text font-custom mb-4 md:mb-0'>@Aprendendo Sem Bullying</li>
          <li className='text-color-text font-custom mb-4 md:mb-0'>Sobre Nós</li>
          <li className='text-color-text font-custom mb-4 md:mb-0'>Política de Privacidade</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
