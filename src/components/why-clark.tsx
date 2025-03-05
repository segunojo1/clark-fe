import Image from 'next/image'
import React from 'react'
import AnimatedStoryContent from './story'
import { Button } from './ui/button'

const WhyClark = () => {
    return (
        <div className='flex flex-col items-center px-3 md:px-0'>
            <div className='flex flex-col gap-[10px] items-center'>
                <Image src='/assets/whyclark.svg' alt='why clark' width={216} height={26} />
                <p className='md:text-2xl/[auto] text-[22px] font-bold font-satoshi'>We Needed a Better Way to Study...📚</p>
            </div>
            <AnimatedStoryContent />
            <div className='flex md:flex-row flex-col gap-2 font-satoshi items-center justify-between w-full max-w-[827px] mt-[50px]'>
                <Button className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] text-white rounded-[23px] flex items-center gap-2'>
                    Join the Waitlist
                    <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                </Button>
                <div className='flex items-center gap-[10px] justify-between w-full'>
                    <p className='text-[18px]/[120%] font-medium'>Too much to read? Let’s </p>
                    <Button className='py-2 px-4 bg-black rounded-[23px] text-white text-[13px]/[120%] font-medium'>Summarize</Button>
                    <Image src='/assets/summarize.svg' alt='summarize' width={18} height={18} className='md:block hidden animate-spin' />
                </div>
            </div>
        </div>
    )
}

export default WhyClark