import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { VscMenu, VscClose } from 'react-icons/vsc'
import Logo from './Logos/Logo-3.jpg'
import Logos from './Logos/Logo-4.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <div className='bg-[#00000090] relative ease-in duration-300'>
            <div className='max-w-[1000px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <Image src={Logos} alt='logo' width={100} height={100} />
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/_signUp'>
                            <button className='bg-white text-black mt-2 p-2 rounded-md hover:bg-gray-200'>Sign Up</button>
                        </Link>
                    </li>
                    {/* <li className='p-4'>
                    <Link href='/work'>App Design</Link>
                </li> */}
                </ul>

                <div className='block sm:hidden z-30'>
                    {isOpen ? <VscClose onClick={toggle} className='text-4xl cursor-pointer z-20' /> : <VscMenu onClick={toggle} className='text-4xl cursor-pointer z-20' />}
                </div>

                <div className={
                    isOpen ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black z-20 text-center ease-in duration-300' :
                        'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black z-20 text-center ease-in duration-300'
                }>
                    <Link href='/' className='absolute top-0 left-0 right-0'>
                        <Image src={Logo} alt='logo' width={100} height={100} />
                    </Link>
                    <ul className='relative z-10'>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/_signUp'>
                                <button className='bg-white text-black p-2 rounded-md hover:bg-gray-200'>Sign Up</button>
                            </Link>
                        </li>
                        {/* <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/portfolio'>Work</Link>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar