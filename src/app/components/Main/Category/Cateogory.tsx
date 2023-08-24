import { getAllCategories } from '@/app/provider/category.provider';
import { ICategory } from '@/app/types/ICategory';
import Image from 'next/image';
import { useEffect, useState } from 'react'

function Cateogory() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const caterorires = getAllCategories()
    setCategories(caterorires)
  },[])

  return (
    <div className=' w-full text-center text-2xl mt-10'>
      <div className='backgroundCategory w-full h-60 rounded-md' >
        <h1 className='font-bold text-white pt-14'>CATEGORIAS</h1>
      </div>
      <div className='flex flex-col flex-wrap md:flex-row gap-8  m-auto max-w-6xl mt-[-90px]'>
        {categories.map((category) => (
          <div key={category.id} className='m-auto '>
            <h1 className='max-w-[10rem] text-nwYellow-600 font-bold text-sm text-center m-auto'>{category.name.toUpperCase()}</h1>
            <div className='bg-nwYellow-600 shadow  w-[208px] h-[208px] rounded-3xl object-cover overflow-hidden'>
              <Image className='m-auto mt-8' src={category.image} alt={category.name} width={category.width}/>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Cateogory