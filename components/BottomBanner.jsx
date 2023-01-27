import Image from 'next/image'
import React from 'react'
import image from "../assets/playstation.png"

const BottomBanner = () => {
  return (
    <div>
      <div className=' mt-20 grid grid-cols-3 bg-gradient-to-tr from-[#C7B184] to-[#BBAA82] rounded-2xl p-8 h-full'>
      <div className='text-white mt-8 ml-24 space-y-2'>
        <p className='text-sm'>10% off</p>
        <h1 className=' font-bold uppercase text-5xl'>Happy<br/>Gaming</h1>
        <p className='text-sm'>25st July - 31st December</p>
      </div>
      <div className=''>
        <Image className='' src={image} alt="image" ></Image>
      </div>
      <div className='text-white  mt-8 ml-16'>
        <p className='text-sm'>Play Station 4</p>
        <h1 className='mt-2 font-bold'>Summer Sales</h1>
        <p className=' text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laboriosam ipsam vero reiciendis?.</p>
        <button className=' mt-3 w-20 bg-white rounded-lg text-[#BBAA82] text-sm p-1'>Shop</button>
      </div>

    </div>
    </div>
  )
}

export default BottomBanner
