import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import { BsHandbag } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

const Header = () => {
    return (

            <div className='container first-letter: mt-5 px-10 mx-auto flex justify-between items-center h-full'>
                <div className='flex space-x-10 items-center justify-between'>
                    <Image src={logo} width={100} height={40} alt="logo"></Image>

                    <ol className=' hidden md:flex md:space-x-10 font-normal text-lg'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>Reviews</li>
                        <li>Contact Us</li>
                    </ol>
                </div>

                <div className='flex items-center space-x-5 text-lg'>
                    <Link href="/">Login</Link>

                    < CiSearch />
                    <BsHandbag />
                </div>
            </div>

    )
}

export default Header
