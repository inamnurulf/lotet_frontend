import React from 'react'
import KPDescription from '@/components/atom/kpDescription'
import Navbar from '@/components/navbar'

const KerjaPraktikDetails = () => {
  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-h-screen'>
      <Navbar defaultform = {false}/>
      <div className='justify-center flex space-x-4 mt-32'>
        <KPDescription/>
      </div>
    </div>
  )
}

export default KerjaPraktikDetails