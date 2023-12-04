import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='bg-white w-screen min-h-[20vh]'>
      <div className='md:w-[50vw] h-[20vh] flex items-center '>
        <Image src={"./Logo.svg"} width={155} height={64} alt="Logo" className='h-[30%]'/>
        <p className='text-[8px]/[8px] p-2 md:max-w-[50%]'>WebApp yang ditujukan untuk membantu mahasiswa saling bertukar informasi mengenai KP dan Seminar yang akan diselenggarakan</p>
      </div>
      <div className='absolute'>
        
      </div>
    </section >
  )
}

export default Footer
