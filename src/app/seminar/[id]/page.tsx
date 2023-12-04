import React from 'react'
import SeminarDescription from '@/components/seminarDescription'
import Navbar from '@/components/navbar'
import SeminarInfo from '@/components/seminarInfo';

interface Seminar{
  _id: string;
  user_id: string;
  title: string;
  details: string;
  image: string;
  eventTime: string;
  category: string[];
}

const SeminarDetails = () => {
  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-w-fit min-h-screen'>
      <Navbar defaultform = {false}/>
      <div className='justify-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mx-8'>
        <SeminarDescription/>
        <SeminarInfo></SeminarInfo>
      </div>
    </div>
  )
}

export default SeminarDetails
