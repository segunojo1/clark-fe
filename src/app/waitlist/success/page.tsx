"use client"

import Image from 'next/image';
import React, { useEffect } from 'react'
import Link from 'next/link';
import confetti from "canvas-confetti";
import Logo from '@/components/shared/logo';

const WaitlistSuccess = () => {

    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
        });
    }, []);
    return (
        <section className="font-anec flex px-2 bg-cover bg-no-repeat flex-col bg items-center z-[9] text-black justify-center bg-[url('/assets/bg.png')]  h-screen">
            <div className='bg-[#F8F8F8] absolute top-0 left-0 right-0 mx-auto w-fit'>
                <Logo />
            </div>

            <h1 className='md:text-[55px]/[83px] text-[38px]/[58px] text-center font-semibold mb-[5px] z-[999999] relative text-black'>🎉 You&apos;re on the List!</h1>
            <p className='md:text-[18px]/[auto] text-base font-normal max-w-[667px] text-start mb-[30px]'>Thanks for signing up! 💌 You&apos;ll be the first to know when Clark goes live.</p>
            <div className='flex flex-col w-[198px] items-center'>
                <Link href='/' className='bg-[#FFF3F3] cursor-pointer py-[10px] px-5 flex gap-[10px] md:text-[16px]/[auto] text-[14px] font-normal mb-5 rounded-lg hover:bg-white hover:border-[#FFF3F3] hover:border-2'>Back home <Image src='/icons/mail-04.svg' alt='mail' width={20} height={20} /></Link>
                
            </div>
        </section>
    )
}

export default WaitlistSuccess