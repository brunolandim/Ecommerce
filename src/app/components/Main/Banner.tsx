import Image from 'next/image'
import React from 'react'
import BannerWoman from 'src/app/public/woman.jpg'
import Link from 'next/link'

function Banner() {
  return (
    <div className='md:relative bg-nwBlue-500'>
      <Image className='hidden md:block' src={BannerWoman} alt='BannerMain' />
      <div className='md:absolute md:inset-0 flex flex-col gap-10 text-white justify-center md:max-w-5xl m-auto'>
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
    </div>
  )
}

export default Banner
