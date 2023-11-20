import React, { useState } from 'react';
import logoImage from '../public/logo_project.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-header w-full md:max-w-full flex flex-col items-center pt-7 pb-7'>
      <div className='flex flex-col items-center justify-center'>
        <img src={logoImage} alt='Logo do projeto' className='w-72 sm:w-72 md:w-80 lg:w-96 xl:w-96' />
      </div>
      <div className='pt-7 px-4'>
        <button
          className='lg:hidden text-white focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {menuOpen ? (
              // Ícone para fechar o menu
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            ) : (
              // Ícone para abrir o menu
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            )}
          </svg>
        </button>

        {/* Lista de itens do menu */}
        <ul
          className={`lg:flex lg:space-x-4 ${menuOpen ? 'flex flex-col' : 'hidden'}`}
        >
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/">INÍCIO</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/tipos">TIPOS</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/sinais">SINAIS</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/efeitos">EFEITOS</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/prevencao">PREVENÇÃO</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/legislacao">LEGISLAÇÃO</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/intervencao">INTERVENÇÃO</Link></li>
          <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>
            <Link className=' hover:underline' to="/depoimentos">DEPOIMENTOS</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

