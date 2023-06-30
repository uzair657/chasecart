import { StaticImageData } from "next/image"

export type Product ={
    id:number,
    title: string,
    tagline:string,
    price:number,
    category:string,
    image: string | StaticImageData
}