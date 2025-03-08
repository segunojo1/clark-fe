"use client"

import Logo from '@/components/shared/logo';
import WaitlistForm from '@/components/waitlist/waitlist-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Waitlist = () => {
    const router = useRouter();
    return (
        <section className="font-anec flex px-2 bg-cover bg-no-repeat flex-col bg items-center z-[9] text-black justify-center bg-[url('/assets/bg.png')]  h-screen">
            <div className='flex items-center absolute gap-[10px] cursor-pointer group md:top-[72px] top-[30px] md:left-[81px] left-0 right-0 md:right-auto mx-auto w-fit ' onClick={() => router.back()}>
                <Image src='/icons/arrow-up.svg' alt='arrow' width={20} height={20} className='group-hover:rotate-12 transition-all scale-x-[-1] ' />
                <p className='text-base font-normal '>Back</p>
            </div>
            <div className='bg-[#F8F8F8] absolute top-0 left-0 right-0 mx-auto w-fit'>
                <Logo />
            </div>
            

            <h1 className='md:text-[55px]/[83px] text-[38px]/[58px] text-center font-semibold mb-[5px] z-[999999] relative text-black'>You&apos;ll Be the First to Know!📩</h1>
            <p className='md:text-[18px]/[auto] text-base font-normal max-w-[667px] text-center mb-[30px]'>Clark: Learn Smarter, Together. 📚✨ Join the AI-powered revolution in collaborative studying!</p>
            <WaitlistForm />
        </section>
    )
}

export default Waitlist