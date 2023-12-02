import React from 'react'
import SeminarDescription from '@/components/atom/seminarDescription'
import Navbar from '@/components/navbar'


const SeminarDetails = () => {
  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-h-screen'>
      <Navbar defaultform = {false}/>
      <div className='justify-center flex space-x-4 mt-32'>
        <SeminarDescription/>
      </div>
    </div>
  )
}

export default SeminarDetails
