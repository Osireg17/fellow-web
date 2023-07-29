import React from 'react'
import Typewriter from 'typewriter-effect'
import Main from '@/components/Main'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { AiOutlineArrowDown } from 'react-icons/ai'

interface HeroProps {
    heading: string
    message: string
}

const Hero = (
    { heading, message }: HeroProps
) => {
    const ScrollDown = () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className='relative flex items-center justify-center min-h-screen z-[-2]'>
                <div className='absolute inset-0 bg-black/60 z-[2]' />
                <div className='p-5 text-white z-[2] mb-5'>
                    <h1 className='text-8xl font-bold'>
                        <Typewriter
                            options={{
                                strings: [heading],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className='py-5 text-4xl'>{message}</p>
                </div>
                <AiOutlineArrowDown className='absolute bottom-0 left-0 right-0 mx-auto mb-[6rem] text-8xl animate-bounce text-white z-10' onClick={ScrollDown} />
            </div>
            <Main text='Who are we ?' />
        </>

    )
}

export default Hero
