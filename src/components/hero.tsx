import React from 'react'
import Logo from './shared/logo'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <section className='bg-[#F8F8F8] flex flex-col items-center gap-8 pt-[131px] px-3 md:px-0'>
            <div className='bg-[#F8F8F8] absolute top-0 left-0 right-0 mx-auto w-fit'>
                <Logo />
            </div>
            <h1 className='font-american md:text-[80px]/[120%] text-[35px] font-semibold text-[#2E302F] text-center md:text-start'><span className=' underline'>Education,</span> Reinvented</h1>
            <p className='md:text-[18px]/[120%] text-base text-center md:text-start font-medium text-[#474948] max-w-[744px] font-satoshi'>Clark makes learning smarter and easier with AI-powered study tools. Chat with AI, create reading materials, take quizzes, track streaks, and collaborate with friends—all in one place!</p>
            <div className='relative'>
                <Image src='/assets/explorematerials.png' alt='explore materials' width={424} height={533} />
                <ul className='font-satoshi absolute bottom-12 mx-auto left-0 right-0 py-[5px] px-2 text-[13px]/[120%] bg-black rounded-[36px] text-white flex items-center gap-4 w-fit'>
                    <li>Story</li>
                    <li>Features</li>
                    <li>Social</li>
                    <Button className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] rounded-[23px] flex items-center gap-2'>
                        Join the Waitlist
                        <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                    </Button>
                </ul>
            </div>
        </section>
    )
}

export default Hero