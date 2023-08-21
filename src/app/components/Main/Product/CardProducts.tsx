import { IProduct } from '@/app/types/IProduct'
import Image from 'next/image'
import React from 'react'

interface IProps {
    products: IProduct[]
}

function CardProducts({products}: IProps) {
  return (
    <div className='flex flex-col m-auto text-nwBlue-500'>
        <div className='backgroundProducts h-[456px] mt-10 lg:ml-10'>
        <h1 className='text-center mt-72 text-white font-bold text-lg'>PRODUTOS EM DESTAQUE</h1>
        </div>
        <div className='flex flex-col max-w-5xl md:flex-row flex-wrap gap-10 lg:gap-28 m-auto mt-[-120px]'>
        {products.map((product) => (
            <div key={product.id} className='border shadow-md rounded-xl'>
                <Image src={product.image} alt={product.name}  />
                <div className='w-4/5 m-auto rounded-md bg-nwBlue-500 p-[0.30rem]' />
                <h1 className='p-2 font-bold text-center'>{product.name}</h1>
                <div className='flex flex-row justify-between py-8 items-center'>
                    <span className='line-through pl-2'>{`R$ ${product.price},00`}</span>
                    <span className='text-end bg-nwYellow-600 px-2  py-1 border rounded-l-xl'>{`R$ ${product.promotion_value},00`}</span>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default CardProducts