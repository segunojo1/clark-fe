import React from 'react'
import Logo from './shared/logo'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='bg-[#F8F8F8] flex flex-col items-center gap-8 pt-[131px]'>
            <div className='bg-[#F8F8F8] absolute top-0 left-0 right-0 mx-auto w-fit'>
                <Logo />
            </div>
            <h1 className='font-american text-[80px]/[120%] font-semibold text-[#2E302F]'><span className=' underline'>Education,</span> Reinvented</h1>
            <p className='text-[18px]/[120%] font-medium text-[#474948] max-w-[744px]'>Clark makes learning smarter and easier with AI-powered study tools. Chat with AI, create reading materials, take quizzes, track streaks, and collaborate with friends—all in one place!</p>
            <div className='relative'>
                <Image src='/assets/explorematerials.png' alt='explore materials' width={424} height={533} />
                <ul className='absolute bottom-12 mx-auto left-0 right-0 py-[5px] px-2 text-[13px]/[120%] bg-black rounded-[36px] text-white flex items-center gap-4 w-fit'>
                    <li>Story</li>
                    <li>Features</li>
                    <li>Social</li>
                    <button className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] rounded-[23px] flex items-center gap-2'>
                        Join the Waitlist
                        <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                    </button>
                </ul>
            </div>
        </section>
    )
}

export default Hero