import ProductCard from '@/components/ProductCard'
import p1 from "public/p1.png"
import p4 from "public/p4.png"
import p3 from "public/p3.png"
import {Products} from "@/utils/mock"
const ProductListing = () => {
  const productChunks = Products.slice(0,3)
  return (
    
      <div className='my-4'>
      <div className='my-4'>
        <h3 className='text-blue-700 text-sm font-bold text-center '>PRODUCTS</h3>
        <h3 className='font-bold text-3xl text-center'>Check What We Have</h3>
      </div>
      <div className='flex lg:justify-evenly md:justify-evenly '>
      {
        
        productChunks.map((items)=>(
          <ProductCard key={items.id} title={items.title} id={items.id} price={items.price} img={items.image} />
        ))
        }
        </div>
      </div>
  )
}

export default ProductListing