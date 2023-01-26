import Image from 'next/image'
import React from 'react'

const Deals = ({ item }) => {
    return (
        <> 
            <div>

            
                <div className='mt-5 h-full'>
                    <div className={` flex items-center justify-center shadow-md py-5 px-8 w-full h-60 ${item.bg}`}>
                        <div className=' justify-center items-center'>
                            <Image src={item.image} width={200} alt="logo"></Image>
                        </div>

                    </div>
                    <h1 className='mt-3'>{item.name}</h1>
                    <h1 className=' font-bold'>{item.price}</h1>
                </div>

            </div>
        </>
    )
}

export default Deals
