import Link from 'next/link'
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Hambuguer from './Hambuguer';
import Logo from './Logo';

function MobileHeader() {
    const showSettings =  (event:any) =>  {
        event.isOpen;
      }
  return (
    <div>
      <div className='flex flex-row bg-nwYellow-600 justify-between px-4'>
        <Logo />
        <button onClick={ showSettings } >
          <Hambuguer />
        </button>
      </div>
        <Menu  itemListClassName='flex flex-col gap-5 text-white bg-nwBlue-500 font-bold p-4' right>
            <Link href='#'>Home</Link>
            <Link href='#'>Empresa</Link>
            <Link href='#'>Sobre</Link>
            <Link href='#'>Localização</Link>
            <Link className='font-bold bg-nwYellow-600 w-min text-nwBlue-500 p-2 px-6 rounded-xl' href='#'>Contato</Link>
        </Menu>
    </div>
  )
}

export default MobileHeader