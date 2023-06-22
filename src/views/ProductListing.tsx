import ProductCard from '@/components/ProductCard'
import React from 'react'
import p1 from "public/p1.png"
import p2 from "public/p2.png"
import p3 from "public/p3.png"
const ProductListing = () => {
  return (
    <div className='flex justify-evenly'>
        <ProductCard title='Brushed Raglan Sweatshirt' price={100} img={p1}/>
        <ProductCard title='Cameryn Sash Tie Dress' price={50} img={p2}/>
        <ProductCard title='Flex Sweatshirt' price={80} img={p3} />
    </div>
  )
}

export default ProductListing