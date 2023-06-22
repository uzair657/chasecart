import Image from 'next/image'
import HeroSection from "@/views/Hero"
import ProductListing from '@/views/ProductListing'
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProductListing/>
    </div>

      )
}
