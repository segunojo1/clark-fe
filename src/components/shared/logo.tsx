import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-fit'>
        <Image src='/assets/clarklogo.svg' alt='clark logo' width={103} height={90}/>
    </div>
  )
}

export default Logo