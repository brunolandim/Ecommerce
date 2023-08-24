import Image from 'next/image'
import React from 'react'
import womanThing from '@/app/assets/womanthing.png'

function Contact() {
  return (
    <div className='mt-20 backgroundFooter '>
        <div className='relative h-[381px] flex  md:flex-row w-full m-auto justify-center gap-8 max-w-6xl '>
            <Image className='md:absolute bottom-0 left-0 md:left-[120px]' src={womanThing} alt='Loja JS'/>
            <div className='flex flex-col'>
                <div className='h-full'/>
                <button className='bg-nwYellow-600 rounded-md p-2 px-4 max-w-sm text-nwBlue-500 font-bold mb-6'>ACIONE NOSSO TELEVENDAS</button>
            </div>
        </div>
    </div>
  )
}

export default Contact