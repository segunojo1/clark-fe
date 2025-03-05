import Image from 'next/image'
import React from 'react'
import GravityText from './gravity-text'

const Footer = () => {
    return (
        <footer className='bg-black px-9 mt-14 z-[99999] relative min-h-[200vh]'>
            <Image src='/assets/clark_icon4.svg' alt='clark icon' width={169} height={151} className='absolute right-0 top-0' />
            <Image src='/assets/clarkbtn.svg' alt='clark btn' width={107} height={118} className='mt-[55px] mx-auto' />
            <div className='flex '>
                <div className='flex flex-col gap-6'>
                <Image src='/assets/gen_study_materials.svg' alt='clark btn' width={460} height={66} className='' />
                <p className='text'>Turn any topic into notes, flashcards, and quizzes—choose from beautiful templates and download as a PDF! </p>
                </div>

                {/* <div className='w-[280px] h-[104px] rounded-[10px] bg-gray-500'>
                    <div className='w-[172px h-[91px] rounded-[40px] bg-white rotate-[27deg]'>Overwheling</div>
                    <div className='w-[172px h-[91px] rounded-[40px] bg-white rotate-[27deg]'>Boring</div>
                    <div className='w-[172px h-[91px] rounded-[40px] bg-white rotate-[27deg]'>Stressful</div>
                    <div className='w-[172px h-[91px] rounded-[40px] bg-white rotate-[27deg]'>Overwheling</div>
                </div> */}
                <GravityText />
                <p className='text-[30px]/[120%] font-bold text-white'>...and Download as PDFs.</p>
            </div>

        </footer>
    )
}

export default Footer