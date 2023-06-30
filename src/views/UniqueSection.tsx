import React from 'react'
import Image from 'next/image'
import p4 from "public/p4.webp"
import Link from 'next/link'

const UniqueSection = () => {
  return (
    <section className='mt-[4rem] mb-10'>
      <div className='flex justify-end px-[6rem]'>
        <h1 className='font-bold text-[2.5rem] leading-[3.5rem] w-[48%] tracking-wide'>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>

      <div className='grid grid-cols-2'>
        <div className='grid grid-cols-2 justify-center items-center relative '>
          <div className="font-bold text-[6.875rem] leading-[7rem] absolute text-gray-900 opacity-[0.07] z-[1]">
            Different from others
          </div>
          <div className='w-[70%]'>
            <h3 className='font-bold text-xl leading-5  text-gray-900 mb-2'>Using Good Quality Materials</h3>
            <p className='font-light text-base tracking-wider text-gray-900'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className='w-[70%]'>
            <h3 className='font-semibold text-xl leading-5 tracking-wide text-gray-900 mb-2'>100% Handmade Products</h3>
            <p className='font-light text-base tracking-wider text-gray-900'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className='w-[70%]'>
            <h3 className='font-semibold text-xl leading-5 tracking-wide text-gray-900 mb-2'>Modern Fashion Design</h3>
            <p className='font-light text-base tracking-wider text-gray-900'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className='w-[70%] mt-4'>
            <h3 className='font-semibold text-lg leading-5 tracking-wide text-gray-900 mb-2'>Discount for Bulk Orders</h3>
            <p className='font-light text-base tracking-wider text-gray-900'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className='flex justify-center gap-6'>
          <Image src={p4}  alt='img' className=' '/>
          <div className='flex flex-col gap-10 basis-1/2'>
            <p className='text-justify text-base text-gray-900 font-light'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'/products'}>
              <button className='text-sm w-1/2 border text-sky-500 border-sky-500 p-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white ' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueSection