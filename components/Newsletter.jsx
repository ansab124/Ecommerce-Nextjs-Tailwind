import Image from 'next/image'
import React from 'react'
import newsletter from "../assets/newsletter.png"

const Newsletter = () => {
    return (
        <>
            <div className='justify-center items-center flex mt-16'>
                <h1 className='uppercase font-bold text-3xl'>Newsletter</h1>
            </div>

            <div className=' mt-10 relative overflow-hidden'>
                <Image className=' opacity-80' src={newsletter} alt='image'></Image>
                <div className=' bg-gradient-to-t from-[#c9c6c6] to-[#000000] rounded-xl absolute top-0 left-0 right-0 opacity-50 bottom-0  h-full w-full'>
                </div>

                <div className='absolute left-[25%] top-24 space-y-6'>

                    <p className='text-white'>Subscribe to our newsletter to get updates and tips about the latest discounts, coupon, reviews and more.</p>
                    <input className='bg-[#EBF1FD] p-3  rounded-sm w-96 ml-52' placeholder='Enter your Email' />
                    <br />
                    <button className='bg-[#246ED1] text-white p-3 rounded-lg w-96 ml-52'>Subscribe Now</button>

                </div>
            </div>
        </>
    )
}

export default Newsletter
