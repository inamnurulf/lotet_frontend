import SeminarCard from '@/components/atom/seminarCard'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import React from 'react'

const Seminar = () => {
  return (
    <div className='flex items-center flex-col bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      
      <div className='mt-8 w-1/3 min-w-fit md:min-w-0 flex justify-center'>
        <SearchBar></SearchBar>
      </div>
      <div className='flex justify-center mt8'>
        <SeminarCard
        title='Seminar KP'
        date='14-January-2003'
        location='DTETI'
        description='Seminar'
        />
      </div>
      
    </div>
  )
}

export default Seminar
