import Image from 'next/image'
import React from 'react'
import Button from './Button'
const Products = ({item}) => {
    return (
        <div className='mt-5'>
            <div className={`shadow-md py-5 px-8 w-full h-full ${item.bg}  rounded-xl`}>
                <div className=' relative'>
                    <div className='py-10'>
                        <h1 className='mt-5 text-white'>{item.text1}</h1>
                        <h1 className='mt-1 text-white font-bold text-lg'>{item.text2}</h1>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-[#f5f9fd] to-[#eef0f2] mt-2 text-3xl uppercase font-bold my-5'>{item.text3}</h1>
                        <Button />
                    </div>

                    <Image className='absolute right-5 top-2' src={item.image} alt="logo" height={item.height} width={item.width}></Image>
                </div>
            </div>
          
        </div>
    )
}

export default Products
