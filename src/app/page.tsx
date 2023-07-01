import Image from 'next/image'
import HeroSection from "@/views/Hero"
import ProductListing from '@/views/ProductListing'
import PromotionEvents from '@/views/PromotionEvents'
import NewsLetter from '@/views/NewsLetter'
import UniqueSection from '@/views/UniqueSection'
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PromotionEvents/>
      <ProductListing/>
      <UniqueSection/>
      <NewsLetter/>
    </div>

      )
}
