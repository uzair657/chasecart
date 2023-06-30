import React from 'react'
import {Products} from "@/utils/mock"
import ProductCard from '@/components/ProductCard'
const products = () => {
  return (
    <div className='grid grid-cols-3 mt-6'>
      {
        Products.map((items)=>(
          <ProductCard key={items.id} title={items.title} id={items.id} price={items.price} img={items.image} />
        ))
        }
    </div>
  )
}

export default products