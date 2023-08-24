'use client';
import Link from 'next/link'
import React from 'react'
import Bubbles from './Bubbles'
import Logo from './Logo'
import MediaQuery from 'react-responsive'
import MobileHeader from './MobileHeader'


function Header() {
  return (
    <>
    <MediaQuery maxWidth={800}>
      <MobileHeader />
    </MediaQuery>
    <MediaQuery minWidth={801}>
      <header className='flex flex-row justify-between font-gotham bg-white'>
        <Bubbles />
        <div className='flex flex-row items-center gap-2 max-w-[1169px] w-full'>
          <Logo id='id' />
          <div className='flex gap-5 w-full h-[80px] pl-[128px] lg:ml-[274px] xl:ml-[174px]  rounded-s-full  items-center text-nwBlue-500 bg-nwYellow-600'>
              <Link href='#id'>Home</Link>
              <Link href='#categories'>Categoria</Link>
              <Link href='#about'>Sobre</Link>
              <Link href='#location'>Localização</Link>
              <Link className='font-bold bg-nwBlue-500 text-white p-2 px-10 rounded-xl' href='#'>Contato</Link>
          </div>
        </div>
      </header>
    </MediaQuery>
    </>
  )
}

export default Header
