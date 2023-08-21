import Link from 'next/link'
import React from 'react'
import Bubbles from './Bubbles'
import Logo from './Logo'
import {slide as Menu} from 'react-burger-menu'


function Header() {
  return (
    <header className='flex flex-row justify-between font-gotham'>
      <Bubbles />
      <div className='flex flex-row items-center gap-2 max-w-[1169px] w-full'>
        <Logo />
        <div className='flex gap-5 w-full h-[80px] pl-[128px] lg:ml-[274px] xl:ml-[174px]  rounded-s-full  items-center text-nwBlue-500 bg-nwYellow-600'>
            <Link href='#'>Home</Link>
            <Link href='#'>Empresa</Link>
            <Link href='#'>Sobre</Link>
            <Link href='#'>Localização</Link>
            <Link className='font-bold bg-nwBlue-500 text-white p-2 px-10 rounded-xl' href='#'>Contato</Link>
        </div>
      </div>
    </header>
  )
}

export default Header