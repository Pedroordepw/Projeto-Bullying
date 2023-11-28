import  { useState } from 'react';
import logoImage from '../public/logo_project.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-header w-full md:max-w-full flex flex-col items-center py-7'>
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
        <ul className={`lg:flex lg:space-x-4 ${menuOpen ? 'flex flex-col' : 'hidden'}`}>
          <Link to="/">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center' >
              INÍCIO
            </li>
          </Link>

          <Link to="/tipos">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              TIPOS
            </li>
          </Link>

          <Link to="/sinais">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              SINAIS
            </li>
          </Link>

          <Link to="/efeitos">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              EFEITOS
            </li>
          </Link>

          <Link to="/prevencao">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              PREVENÇÃO
            </li>
          </Link>

          <Link to="/legislacao">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              LEGISLAÇÃO
            </li>
          </Link>

          <Link to="/intervencao">
            <li className='bg-button shadow-md text-color-text mb-1 rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl flex flex-col items-center'>
              INTERVENÇÃO
            </li>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Header;

