import Image from 'next/image'
import React from 'react'

const WhyClark = () => {
  return (
    <div>
        <div className='flex flex-col gap-[10px] items-center'>
        <Image src='/assets/whyclark.svg' alt='why clark' width={216} height={26} />
        <p className='text-2xl/[auto] font-bold'>We Needed a Better Way to Study...📚</p>
        </div>
    </div>
  )
}

export default WhyClark