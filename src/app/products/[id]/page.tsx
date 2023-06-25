import {Products} from "@/utils/mock"
import ProductCard from '@/components/ProductCard'
import Image from "next/image";
import AddtoCart from "@/AddtoCart";
const getProductDetail=(id:string | number)=>{
    return Products.filter((product)=>product.id==id)
};
export default function Page({ params }: { params: { id: string } }) {
   const result = getProductDetail(params.id);
    return  <div className="flex  mt-16 py-10  ">
      {
       result.map((items)=>(
        <div key={items.id} className="flex justify-between gap-6 ">
        <div className="flex-1">
          <Image src={items.image} alt={items.title}/>
        </div>
        <div className="flex-1">
        <h2 className="capitalize">Product Details</h2>
        <p>{items.title} </p>
        <p className="capitalize">{items.category} </p>
        <p>${items.price} </p>
        <AddtoCart/>
        </div>
       
        </div>
      )) 
      }
    </div>
  }