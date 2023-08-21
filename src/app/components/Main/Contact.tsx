import Image from 'next/image'
import React from 'react'
import womanThing from '@/app/public/womanthing.png'

function Contact() {
  return (
    <div className='bg-nwBlue-500 mt-10'>
        <div className='flex flex-row max-w-5xl m-auto justify-center gap-8'>
            <Image src={womanThing} alt='Loja JS'/>
            <div className='flex flex-col'>
                <div className='h-full'/>
                <button className='bg-nwYellow-600 rounded-md p-2 px-4 max-w-sm text-nwBlue-500 font-bold mb-6'>ACIONE NOSSO TELEVENDAS</button>
            </div>
        </div>
    </div>
  )
}

export default Contact