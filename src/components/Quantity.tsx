"use client"; 
import React from 'react'
import { useState } from 'react';


const Quantity = () => {
    
const [num,setNum]=useState(1);
  return (
    <div className='flex gap-2'>
        {/* Minus */}
        <button className='w-6 h-6 border rounded-full flex justify-center items-center' onClick={()=>{setNum(num<=1?1:num-1)}}>
            -
        </button>
        <span>{num}</span>
        {/* Plus */}
        <button className='w-6 h-6 border rounded-full flex justify-center items-center'onClick={()=>{setNum(num+1)}}>
            +
        </button>
    </div>
  )
}

export default Quantity