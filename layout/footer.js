import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import icons from "../assets/social-icons.png"

const footer_links = [{
    title: "Quick Links",
    childerns: [{
        title: "Home",
        link: "/"
    },
    {
        title: "SHop",
        link: "/"
    },
    {
        title: "About Us",
        link: "/"
    },
    {
        title: "Reviews",
        link: "/"
    },
    {
        title: "Contact US",
        link: "/"
    }]
},
{
    title: "Legal",
    childerns: [{
        title: "Privacy Policy",
        link: "/"
    },
    {
        title: "Lincesing Agreement",
        link: "/"
    },
    {
        title: "Partners Terms",
        link: "/"
    },
    {
        title: "Terms & Condition",
        link: "/"
    },
    ]
},
{
    title: "Customer Service",
    childerns: [{
        title: "Shipping information",
        link: "/"
    },
    {
        title: "My Cart",
        link: "/"
    },
    {
        title: "Payment Method",
        link: "/"
    },
    {
        title: "Warranty & Return",
        link: "/"
    },
    {
        title: "FAQ & Support",
        link: "/"
    }]
}]

const Footer = () => {
    return (

        <div className=' containe grid grid-cols-5 mx-auto px-10 py-16'>
            <div className=" justify-start items-start col-span-2 ">
                <Image src={logo} width={100} height={40} alt="logo"></Image>
                <Image className='-ml-4 mt-6' src={icons} height={50} alt="logo"></Image>
                <p className='font-bold text-lg mt-3'>Stay Connected</p>
            </div>
            {
                footer_links.map((link, index) => {
                    return <div key={index}>
                        <h4 className='font-bold'>{link.title}</h4>
                        {link.childerns && <ol className=' mt-4 flex flex-col space-y-2 text-sm'>
                            {link.childerns.map((child, index) => {
                                return <li key={index} className=' text-black opacity-60'>{child.title}</li>
                            })}

                        </ol>}
                    </div>
                })
            }

        </div>
    )
}

export default Footer
