import Image from 'next/image'
import React from 'react'
import image1 from "../assets/image-1.png"

const Banner = () => {
  return (
    <div className=' grid grid-cols-3 bg-gradient-to-tr from-[#DB383D] to-[#EF473A] rounded-md h-full mt-5'>
      <div className='text-white mt-16 ml-24 space-y-2'>
        <p className='text-sm'>20% off</p>
        <h1 className=' font-bold uppercase text-7xl'>More<br/> Music</h1>
        <p className='text-sm'>25th July - 31st December</p>
      </div>
      <div className=''>
        <Image className='' src={image1} alt="image" width={200}></Image>
      </div>
      <div className='text-white mr-36 mt-16 '>
        <p className='text-sm'>Beats 3</p>
        <h1 className='mt-2 font-bold'>Summer Sales</h1>
        <p className=' text-[9px] mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure laboriosam ipsam vero reiciendis? Praesentium consequuntur explicabo sint recusandae molestiae qui, excepturi perferendis, eos sequi odio, vero enim culpa! Consectetur, omnis.</p>
        <button className=' mt-3 w-20 bg-white rounded-lg text-red-600 text-sm p-1'>Shop</button>
      </div>

    </div>
  )
}

export default Banner
