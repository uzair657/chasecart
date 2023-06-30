
import {Products} from "@/utils/mock"
import ProductCard from '@/components/ProductCard'
import Image from "next/image";
import AddtoCart from "@/AddtoCart";
import Quantity from "@/components/Quantity";

const size = ["XS","S","M","L","XL"]
const getProductDetail=(id:string | number)=>{
    return Products.filter((product)=>product.id==id)
};
export default function Page({ params }: { params: { id: string } }) {
   const result = getProductDetail(params.id);
    return  <div className="flex  mt-16 py-10">
      {
       result.map((items)=>(
        <div  className="flex justify-between  w-full ">
          <div className="w-[15%]">
          <Image src={items.image} alt={items.title} width={100} height={100}/>
          </div>
        <div className="w-[70%]">
          <Image src={items.image} alt={items.title} width={600} height={600}/>
        </div>
        {/* Right Content Side */}
        <div className="w-[40%]">
          <div>
          <h2 className="capitalize font-semibold text-2xl text-black">{items.title}</h2>
          <p className="capitalize text-gray-400 font-semibold text-lg">{items.tagline} </p>
          
          </div>
          {/* Size Section */}
          <div className="mt-4">
            <h3 className=" font-semibold text-sm text-black">
            SELECT SIZE
            </h3>
            <div className="flex gap-x-3">
            {
              size.map((mysize)=>(
                <div className="flex cursor-pointer items-center justify-center w-7 h-7 mt-2 duration-300 border rounded-full hover:shadow-xl ">
                  <span className="text-[10px] font-semibold text-center text-gray-600 ">
                    {mysize}
                  </span>
                </div>
              ))
            }
            </div>
          </div>
          {/* Quantity Section */}
          <div className="flex gap-3 mt-4 items-center">
          <h3 className="text-sm font-semibold">Quantity</h3>
          <Quantity/>
          </div>
            <div className="flex gap-4  items-center mt-4">
            <AddtoCart/>
            <p className="text-center font-semibold text-xl ">${items.price} </p>
            </div>
        </div>
       
        </div>
      )) 
      }
    </div>
  }