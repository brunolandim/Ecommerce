import { getProducts } from '@/app/provider/products.provider'
import { IProduct } from '@/app/types/IProduct'
import { useEffect, useState } from 'react'
import CardProducts from './CardProducts'

function Products() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getAllProducts = getProducts();
    console.log(getAllProducts)
    setProducts(getAllProducts)
  }, [])

  return (
    <div className='w-full'>
        <CardProducts products={products} />
    </div>
  )
}

export default Products