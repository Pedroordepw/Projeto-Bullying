import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RoutesBase = () => {
  return (
    <div>
        <header className='flex gap-4'>
            <Link className=' hover:underline' to="/">inicio</Link>
            <Link className=' hover:underline' to="/tipos">tipos</Link>
            <Link className=' hover:underline' to="/efeitos">efeitos</Link>
        </header>
        <Outlet/>
    </div>
  )
}

export default RoutesBase