import React from 'react'
import logoImage from '../public/logo_project.png'

const Header = () => {
  return (
    <div>
      <div className='bg-header flex flex-col items-center pt-7 pb-7'>
        <div className='flex flex-col items-center justify-center'>
          <img src={logoImage} alt='Logo do projeto' className='md:w-48 lg:w-64 xl:w-96 max-w-full'/>
        </div>
        <div className='pt-7  flex-wrap'>
          <ul className='flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4'>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>INÍCIO</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>TIPOS</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>SINAIS</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>EFEITOS</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>PREVENÇÃO</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>LEGISLAÇÃO</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>INTERVENÇÃO</li>
            <li className='bg-button text-color-text rounded-custom py-2 px-3 md:py-3 md:px-5 font-custom text-sm md:text-base lg:text-lg xl:text-xl items-center'>DEPOIMENTOS</li>
          </ul>
        </div>        
      </div>      
    </div>
  )
}

export default Header