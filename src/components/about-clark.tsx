import Image from 'next/image'
import React from 'react'

const AboutClark = () => {
  return (
    <section className='max-w-[800px] mx-auto mt-[115px]'>
        <h2 className='text-[53px]/[120%] font-semibold font-american '><span className='underline'>Everything</span> you’ve ever needed to ace your studies—and more.</h2>
        <div className='text-[17px]/[120%] mt-[25px]'>ClarkAi brings all your study tools together—AI assistance, quizzes, whiteboards, and progress tracking—so you can learn faster and smarter, without the hassle.</div>

        <div className='flex gap-[59px] items-center  rounded-[20px] h-full border mt-[29px]'>
            <div className='flex flex-col justify-between min-h-full h-[231px] px-14 pt-3 pb-[38px]'>
                <h3>Your AI Study Buddy. Always Ready.</h3>
                <p>Get instant answers, study tips, and recommendations—whenever you need them.</p>
            </div>
            <Image src='/assets/edurein.svg' alt='edu reinvented' width={207} height={247} className='w-[207px] h-[247px] rotate-[-6.97deg]'/>
        </div>
            <div className='grid grid-cols-2 gap-5 mt-5'>
            <Image src='/assets/card1.svg' alt='All Your Study Materials, All in One Place. Upload PDFs, share YouTube links, and organize your resources with ease.' width={390} height={600} className='' draggable={false} />
            <Image src='/assets/card2.svg' alt='Scan, Summarize, and Learn Faster. Easily scan images, summarize PDFs, and break down YouTube videos into key points.' width={390} height={600} className='' draggable={false} />
            <Image src='/assets/card3.svg' alt='Stay Motivated with Streaks & Rewards. Build a daily habit, unlock achievements, and make learning more fun.' width={390} height={600} className='' draggable={false} />
            <Image src='/assets/card4.svg' alt='Find Your Study Crew. Learn Together. Join or create study groups, upload resources, and keep each other accountable.' width={390} height={600} className='' draggable={false} />
 
            </div>
    </section>
  )
}

export default AboutClark