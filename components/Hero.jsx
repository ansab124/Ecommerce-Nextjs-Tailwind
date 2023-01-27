import Image from 'next/image'
import React from 'react'
import headphone from "../assets/head-phone.png"

const Hero = () => {
    return (
        <div className=' mt-5 shadow-md w-full h-full bg-gradient-to-tr from-[#8E9EAB] to-[#EBEFF2] rounded-xl'>
            <div className= 'grid grid-cols-3 px-14 py-8 max-w-[1400px] mx-auto'>
                <div className=' pt-20 col-span-2'>
                    <h1 className='ml-1 text-transparent bg-clip-text bg-gradient-to-l from-[#8E9EAB] to-[#EBEFF2] text-2xl '>Apple</h1>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-[#8E9EAB] to-[#EBEFF2] mt-3 text-5xl font-bold'>Silver</h1>
                    <h1 className=' text-transparent bg-clip-text bg-gradient-to-l from-[#f5f9fd] to-[#eef0f2] mt-3 text-7xl uppercase font-bold'>Airpods Max</h1>
                    <button className='mt-10 rounded-3xl text-sm px-8 py-3 bg-[#ff1f18] text-white'>Shop Category</button>
                </div>

                <div>
                    <Image src={headphone} alt="icon" width={536} height={536}></Image>
                    <h1 className='font-bold text-right '>Description</h1>
                    <p className=' text-sm text-right'>AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
