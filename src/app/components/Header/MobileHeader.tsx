import Link from 'next/link'
import React from 'react'
import { slide as Menu } from 'react-burger-menu'

function MobileHeader() {
    const showSettings =  (event:any) =>  {
        event.isOpen;
      }
  return (
    <div>
        <Menu right>
        <Link  id="home" className="menu-item" href="#">Home</Link>
        <Link id="about" className="menu-item" href="#">About</Link>
        <Link id="contact" className="menu-item" href="#">Contact</Link>
        <Link onClick={ showSettings } className="menu-item--small" href="">Settings</Link>
        </Menu>
    </div>
  )
}

export default MobileHeader