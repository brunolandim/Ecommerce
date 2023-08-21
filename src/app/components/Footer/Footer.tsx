import React from 'react'
import Whatsapp from './Whatsapp'
import Instagram from './Instagram'
import FaceBook from './FaceBook'
import WhiteLogo from './WhiteLogo'
import Image from 'next/image'
import LineFooter from '@/app/public/lineFooter.png'
import IconNoweb from './IconNoweb'

function Footer() {
  return (
    <div className=' bg-nwBlue-500 text-white'>
      <div className=' flex flex-row max-w-5xl m-auto justify-between h-60 pt-10'>
          <div className='flex flex-col'>
              <WhiteLogo />
              <h1 className='text-left'>Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!</h1>
          </div>
          <div className='flex flex-col gap-2'>
              <span>NOS SIGA NAS REDES</span>
              <div className='flex flex-row justify-center gap-4'>
                <Whatsapp />
                <Instagram />
                <FaceBook />
              </div>
          </div>
      </div>
      <div className='flex flex-col max-w-5xl m-auto'>
        <Image src={LineFooter} alt='yellow line' width={1920} height={200} />
        <div className='flex flex-row justify-between w-full'>
          <p>© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</p>
            <div className='flex flex-row items-center gap-2'>
              <span>Desenvolvido por</span>
              <IconNoweb />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer