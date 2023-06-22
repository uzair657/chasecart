import Image,{StaticImageData} from "next/image"


const ProductCard = (props:{title:string, price:number , img:StaticImageData}) => {
  return (
    <div className="mt-10">
        <Image src={props.img} alt="Product 1"/>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <h3 className="font-bold text-lg">${props.price}</h3>
    </div>
  )
}

export default ProductCard