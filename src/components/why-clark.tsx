import Image from 'next/image'
import React from 'react'
import AnimatedStoryContent from './story'

const WhyClark = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-[10px] items-center'>
                <Image src='/assets/whyclark.svg' alt='why clark' width={216} height={26} />
                <p className='text-2xl/[auto] font-bold'>We Needed a Better Way to Study...📚</p>
            </div>
            <AnimatedStoryContent />
            <div className='flex items-center justify-between w-full max-w-[827px] mt-[50px]'>
                <button className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] text-white rounded-[23px] flex items-center gap-2'>
                    Join the Waitlist
                    <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                </button>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-[18px]/[120%] font-medium'>Too much to read? Let’s </p>
                    <button className='py-2 px-4 bg-black rounded-[23px] text-white text-[13px]/[120%] font-medium'>Summarize</button>
                    <Image src='/assets/summarize.svg' alt='summarize' width={18} height={18} className=' animate-spin' />
                </div>
            </div>
        </div>
    )
}

export default WhyClark