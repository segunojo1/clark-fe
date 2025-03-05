'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Collab = () => {

    return (
        <section className="mt-[124px] relative flex flex-col items-center bg-[url('/assets/bg.png')] bg-contain ">
            <div className='flex justify-between w-full items-center px-[29px] pt-[30px] '>
                <Image src='/assets/clarkbtn.svg' alt='' width={40} height={44} className='' draggable={false} />
                <Image src='/assets/plusmore.svg' alt='' width={51} height={19} className='' draggable={false} />
            </div>
            <div className='text-[60px]/[120%] font-semibold font-american flex flex-col items-center'>
                <h2>Study Together,</h2>
                <div className='flex'>
                    <span className='relative'> Anytime<Image src='/assets/line1.svg' alt='' width={255} height={3} className='absolute bottom-1 right-0 left-0' draggable={false} /></span>
                    ,  <span className='relative'> Anywhere. <Image src='/assets/line2.svg' alt='' width={304} height={1} className='absolute bottom-1 right-0 left-0' draggable={false} /></span>
                </div>
            </div>
            <p className='text-[20px]/[120%] text-[#606060] mt-[27px]'>Collaborate in real-time with friends with an infinite whiteboard, sticky notes, timers, and more.</p>

            <div className='flex mt-[104px] gap-[103px] pb-48'>
                <div className='relative mt-[90px]'>
                    <motion.div transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}
                        drag
                        dragTransition={{ power: 0.1 }}>
                        <Image src='/assets/cardd4.svg' alt='' width={324} height={387} className='' draggable={false} />

                    </motion.div>
                    <Image src='/assets/sherrif_cursor.svg' alt='' width={80} height={43} className='absolute z-[9999] top-7 right-28' draggable={false} />
                    <Image src='/assets/segun_cursor.svg' alt='' width={80} height={43} className='absolute z-[9999] top-36 right-12' draggable={false} />

                </div>
                <motion.div transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}
                className='z-[9999999]'
                    drag
                    dragTransition={{ power: 0.1 }}>
                    <Image src='/assets/cardd3.svg' alt='' width={324} height={387} className='' draggable={false} />

                </motion.div>
                
                <div className='relative mt-[90px]'>
                    <motion.div transition={{ ease: "easeOut", type: "spring", duration: 0.3, damping: 90 }}
                        drag
                        dragTransition={{ power: 0.1 }}>
                        <Image src='/assets/cardd5.svg' alt='' width={324} height={387} className='' draggable={false} />

                    </motion.div>
                    <Image src='/assets/hasbiy_cursor.svg' alt='' width={80} height={43} className='absolute z-[9999] top-7 right-28' draggable={false} />

                </div>

                <Image src='/assets/shadow2.svg' alt='' width={1924} height={603} className='absolute  left-0 -bottom-28  right-0 z-[99]' draggable={false} />

            </div>
            <button className='py-2 px-4 text-[13px]/[120%] bg-[#F14E07] text-white rounded-[23px] flex items-center gap-2 mx-auto z-[9999] relative'>
                    Join the Waitlist
                    <Image src='/assets/clarkbtn.svg' alt='clark btn' width={16} height={17} />
                </button>
        </section>
    )
}

export default Collab