import {Products} from "@/utils/mock"
import ProductCard from '@/components/ProductCard'
const getProduct=(category:string)=>{
    return Products.filter((product)=>product.category===category)
};
export default function Page({ params }: { params: { slug: string } }) {
   const result = getProduct(params.slug);
//    flex justify-evenly mt-16 py-10 flex-wrap
    return  <div className='grid grid-cols-3'>
         {
            result.length>0 ? result.map((items)=>(
                <ProductCard key={items.id} id={items.id  } title={items.title} price={items.price} img={items.image} />
              )) : <p>Category Not Found</p>
        }
        
  </div>
  }