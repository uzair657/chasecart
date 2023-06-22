import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import HeroImg from "public/hero_section.webp"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="flex py-6">
        {/* Left Side Hero Section  */}
        <div className="flex-1">
        <Badge className="bg-blue-200 mt-4 rounded-lg hover:bg-blue-200 py-2 px-4 cursor-pointer text-blue-700">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className="bg-black  mt-4">Start Shopping</Button>

        </div>
        {/* Right Side Hero Section Image */}
        <div className="flex-1">
            <div className="bg-red-50 rounded-tl-full rounded-bl-full rounded-tr-full">
            <Image src={HeroImg} alt="Hero Image"/>
            </div>
            
        </div>
    </section>
  )
}

export default Hero