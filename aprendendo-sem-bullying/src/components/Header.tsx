import React from 'react'
import logoImage from '../public/logo_project.png'

const Header = () => {
  return (
    <div>
      <div className='bg-header flex flex-col items-center'>
        <img src={logoImage} alt='Logo do projeto'/>
        <div>
          <ul className='flex flex-row justify-between space-x-4'>
            <li className='bg-button text-button-text rounded-xl p-3'>INÍCIO</li>
            <li className='bg-button text-button-text rounded-lg p-3'>TIPOS</li>
            <li className='bg-button text-button-text rounded-lg p-3'>SINAIS</li>
            <li className='bg-button text-button-text rounded-lg p-3'>EFEITOS</li>
            <li className='bg-button text-button-text rounded-lg p-3'>PREVENÇÃO</li>
            <li className='bg-button text-button-text rounded-lg p-3'>LEGISLAÇÃO</li>
            <li className='bg-button text-button-text rounded-lg p-3'>INTERVENÇÃO</li>
            <li className='bg-button text-button-text rounded-lg p-3'>DEPOIMENTOS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header