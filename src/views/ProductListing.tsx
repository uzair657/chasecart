import ProductCard from '@/components/ProductCard'
import p1 from "public/p1.png"
import p4 from "public/p4.png"
import p3 from "public/p3.png"
import {Products} from "@/utils/mock"
const ProductListing = () => {
  const productChunks = Products.slice(0,3)
  return (
    <div className='flex justify-evenly '>
      {
        productChunks.map((items)=>(
          <ProductCard key={items.id} title={items.title} id={items.id} price={items.price} img={items.image} />
        ))
        }
    </div>
  )
}

export default ProductListing