'use client'
import Logo from './shared/logo'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from './shared/animated-text'

const Hero = () => {
    return (
        <section className='bg-[#F8F8F8] flex flex-col items-center gap-8 pt-[131px] px-3 md:px-0'>
            <div className='bg-[#F8F8F8] absolute top-0 left-0 right-0 mx-auto w-fit'>
                <Logo />
            </div>
            <AnimatedText />
            <p className='md:text-[18px]/[120%] text-base text-center md:text-start font-medium text-[#474948] max-w-[744px] font-satoshi'>Clark makes learning smarter and easier with AI-powered study tools. Chat with AI, create reading materials, take quizzes, track streaks, and collaborate with friends—all in one place!</p>
            <div className='relative'>
                <Image src='/assets/exploree.png' alt='explore materials' draggable={false} width={424} height={533} />
                <ul className='font-satoshi absolute bottom-12 mx-auto left-0 right-0 py-[5px] px-4 pr-2 text-[13px]/[120%] bg-black rounded-[36px] text-white flex items-center gap-4 w-fit'>
                    <li>Story</li>
                    <li>Features</li>
                    <li className='cursor-pointer'><Link href='https://lnk.bio/clarkai'>Social</Link></li>
                    <Link href='/waitlist' className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] rounded-[23px] flex items-center gap-2'>
                        Join the Waitlist
                        <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Hero