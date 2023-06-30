import Image,{StaticImageData} from "next/image"
import AddtoCart from "@/AddtoCart"
import Link from "next/link"

const ProductCard = (props:{title:string, price:number,id:number , img:StaticImageData|string}) => {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="mx-2 my-4 ">
      <div className="hover:scale-110 duration-500 cursor-pointer">
      <Image src={props.img} alt="Product 1" />
        <h3 className="font-bold text-lg capitalize">{props.title}</h3>
        <h3 className="font-bold text-lg text-gray-500">${props.price}</h3>
      </div>
        <div>
        <AddtoCart/>
        </div>
        
    </div>
    </Link>
  )
}

export default ProductCard