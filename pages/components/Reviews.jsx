import Image from 'next/image'
import React from 'react'
import image1 from "../../assets/rectangle-1.png"
import image2 from "../../assets/rectangle-2.png"
import image3 from "../../assets/rectangle-3.png"

const Reviews = () => {
    return (

        <>
            <div className='my-10 justify-center items-center flex flex-col w-full space-y-4'>
                <h1 className='font-bold text-3xl mt-10'>Reviews</h1>
                <p className='font-bold text-[#000000B2]'>Get all the latest reviews and news on Tech and Gadgets</p>
            </div>

            <div className='flex justify-between items-center mt-16'>
                <div >
                    <Image src={image1} alt="image" width={400}></Image>
                    <h1 className=' font-bold mt-5'>AIAIAI Studio Wireless+; Finally, low-<br/>
                        Latency headphones for music producers </h1>
                        <p className='text-sm mt-5'>May 24, 2022</p>

                </div>
                <div>
                    <Image src={image2} alt="image" width={400}></Image>
                    <h1 className=' font-bold mt-5'>Razer blade 15 review: A real treat if<br/>
                        You’ve gotthe cash</h1>
                        <p className='text-sm mt-5'>July 21, 2022</p>
                </div>

                <div>
                    <Image src={image3} alt="image" width={400}></Image>
                    <h1 className=' font-bold mt-5'>The Fiture mirror wants to improve <br/>your at-home workout form</h1>
                    <p className='text-sm mt-5'>Aug 31, 2022</p>
                </div>

            </div>
        </>
    )
}

export default Reviews
