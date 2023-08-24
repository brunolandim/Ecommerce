import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HeroImage from '@/app/assets/heroImage.png'

function Hero() {
  return (
    <div className=' bg-nwBlue-500 backGroundBanner '>
      <div className='flex flex-row justify-between md:max-w-6xl m-auto'>
        <div className='flex flex-col py-8 md:py-0 gap-10 text-white m-auto'>
          <h1 className='font-extrabold text-5xl max-w-md m-auto md:m-0'>ILUMINE SEU DIA A DIA!</h1>
          <p className=' max-w-md m-auto md:m-0'>
            Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
            dia! Temos produtos para toda sua casa com a melhor qualidade e
            atendimento da região!
          </p>
          <div className='flex flex-col w-full md:max-w-sm font-bold gap-3'>
            <Link
              className='bg-nwYellow-600 w-4/5 m-auto  text-nwBlue-500 p-2 rounded-md text-center md:max-w-xs'
              href='#'
            >
              VEJA NOSSOS PRODUTOS
            </Link>
            <Link
              className='border border-white w-4/5 m-auto  rounded-md p-2 text-center md:max-w-xs'
              href='#'
            >
              NOS CONHEÇA MELHOR
            </Link>
          </div>
        </div>
        <Image className='hidden md:block' src={HeroImage} alt='Banner' width={500}/>
      </div>

    </div>
  )
}

export default Hero
